const express = require('express');
const router = express.Router();
const { Car, Category } = require('../models');

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

// Create car
router.post('/', async (req, res) => {
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
    
    const car = await Car.create({
      name,
      fuelType,
      price,
      imageUrl,
      categoryId,
    });
    
    res.status(201).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update car
router.put('/:id', async (req, res) => {
  try {
    const { name, fuelType, price, imageUrl, categoryId } = req.body;
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
    
    car.name = name || car.name;
    car.fuelType = fuelType || car.fuelType;
    car.price = price || car.price;
    car.imageUrl = imageUrl || car.imageUrl;
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
    
    await car.destroy();
    
    res.json({ message: 'Car removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router; 