const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Car, Category } = require('../models');

// Konfigurasi storage untuk multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/cars'));
  },
  filename: function (req, file, cb) {
    // Buat nama file unik dengan timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExt = path.extname(file.originalname);
    cb(null, 'car-' + uniqueSuffix + fileExt);
  }
});

// Filter file untuk memeriksa tipe gambar
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, JPEG, PNG, and WEBP files are allowed.'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Helper function to format image URL
const formatImageUrl = (url) => {
  if (!url) return null;
  
  // If already starts with '/images/cars', leave as is
  if (url.startsWith('/images/cars/')) {
    return url;
  }
  
  // If URL is an external URL (starts with http:// or https://), leave as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Otherwise, assume it's just a filename and format properly
  return `/images/cars/${url.replace(/^\/+/, '')}`;
};

// Helper untuk menghapus file gambar lama
const deleteImage = (imageUrl) => {
  if (!imageUrl) return;
  
  // Hanya hapus jika gambar disimpan di server
  if (imageUrl.startsWith('/images/cars/')) {
    const filename = imageUrl.split('/').pop();
    const filePath = path.join(__dirname, '../public/images/cars', filename);
    
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Deleted old image: ${filePath}`);
    }
  }
};

// Get all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'slug'],
        },
      ],
    });
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get cars by category
router.get('/category/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const cars = await Car.findAll({
      where: { categoryId },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'slug'],
        },
      ],
    });
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get single car
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'slug'],
        },
      ],
    });
    
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    
    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Upload gambar mobil
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    const imageUrl = `/images/cars/${req.file.filename}`;
    res.json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading file' });
  }
});

// Create car
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, fuelType, price, imageUrl, categoryId } = req.body;
    
    if (!name || !fuelType || !price || !categoryId) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
    
    // Check if category exists
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    // Variabel untuk menyimpan URL gambar
    let finalImageUrl;
    
    // Jika ada file gambar yang diupload
    if (req.file) {
      finalImageUrl = `/images/cars/${req.file.filename}`;
    } else if (imageUrl) {
      // Jika tidak ada file upload tapi ada URL gambar di body
      finalImageUrl = formatImageUrl(imageUrl);
    } else {
      // Jika tidak ada gambar sama sekali
      finalImageUrl = null;
    }
    
    const car = await Car.create({
      name,
      fuelType,
      price,
      imageUrl: finalImageUrl,
      categoryId,
    });
    
    res.status(201).json(car);
  } catch (error) {
    console.error('Error creating car:', error);
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
});

// Update car with image upload
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, fuelType, price, categoryId } = req.body;
    const car = await Car.findByPk(req.params.id);
    
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    
    // If categoryId is changing, check if new category exists
    if (categoryId && categoryId !== car.categoryId) {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
    }
    
    // Jika ada upload gambar baru
    if (req.file) {
      // Hapus gambar lama jika ada
      deleteImage(car.imageUrl);
      
      // Set imageUrl baru
      car.imageUrl = `/images/cars/${req.file.filename}`;
    } else if (req.body.imageUrl) {
      // Jika ada imageUrl baru di body tapi tidak ada file upload
      const newImageUrl = formatImageUrl(req.body.imageUrl);
      
      // Hanya update jika berbeda
      if (newImageUrl !== car.imageUrl) {
        deleteImage(car.imageUrl);
        car.imageUrl = newImageUrl;
      }
    }
    
    car.name = name || car.name;
    car.fuelType = fuelType || car.fuelType;
    car.price = price || car.price;
    car.categoryId = categoryId || car.categoryId;
    
    await car.save();
    
    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete car
router.delete('/:id', async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    
    // Hapus gambar jika ada
    deleteImage(car.imageUrl);
    
    await car.destroy();
    
    res.json({ message: 'Car removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router; 