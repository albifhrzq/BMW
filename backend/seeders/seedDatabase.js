// Load environment variables
require('dotenv').config();

const { sequelize, Car, Category } = require('../models');

const seedDatabase = async () => {
  try {
    console.log('Using database:', process.env.DB_NAME);
    console.log('DB User:', process.env.DB_USER);
    console.log('DB Host:', process.env.DB_HOST);
    
    // Sync database with { force: true } to drop and recreate tables
    await sequelize.sync({ force: true });
    console.log('Database synced');

    // Create categories
    const categories = await Category.bulkCreate([
      { name: 'Z4', slug: 'z4' },
      { name: 'BMW i', slug: 'bmw-i' },
      { name: 'BMW X', slug: 'bmw-x' },
      { name: 'BMW 2', slug: 'bmw-2' },
      { name: 'BMW 3', slug: 'bmw-3' },
      { name: 'BMW 5', slug: 'bmw-5' },
      { name: 'BMW 7', slug: 'bmw-7' }
    ]);
    console.log('Categories seeded');

    // Get category IDs
    const z4 = categories.find(c => c.slug === 'z4');
    const bmwI = categories.find(c => c.slug === 'bmw-i');
    const bmwX = categories.find(c => c.slug === 'bmw-x');
    const bmw2 = categories.find(c => c.slug === 'bmw-2');
    const bmw3 = categories.find(c => c.slug === 'bmw-3');
    const bmw5 = categories.find(c => c.slug === 'bmw-5');
    const bmw7 = categories.find(c => c.slug === 'bmw-7');

    // Create cars
    await Car.bulkCreate([
      // Z4 models
      {
        name: 'BMW Z4 Roadster',
        fuelType: 'Gasoline',
        price: 1843000000,
        imageUrl: '/images/cars/z4-roadster.jpg',
        categoryId: z4.id
      },
      {
        name: 'BMW Z4 M40i Roadster',
        fuelType: 'Gasoline',
        price: 2067000000,
        imageUrl: '/images/cars/z4-m40i-roadster.jpg',
        categoryId: z4.id
      },

      // BMW i models
      {
        name: 'BMW iX',
        fuelType: 'Full-Electric',
        price: 2545000000,
        imageUrl: '/images/cars/ix.jpg',
        categoryId: bmwI.id
      },
      {
        name: 'BMW i7',
        fuelType: 'Full-Electric',
        price: 3415000000,
        imageUrl: '/images/cars/i7.jpg',
        categoryId: bmwI.id
      },
      {
        name: 'BMW i5',
        fuelType: 'Full-Electric',
        price: 2225000000,
        imageUrl: '/images/cars/i5.jpg',
        categoryId: bmwI.id
      },
      {
        name: 'BMW i5 M60 xDrive',
        fuelType: 'Full-Electric',
        price: 2830000000,
        imageUrl: '/images/cars/i5-m60-xdrive.jpg',
        categoryId: bmwI.id
      },
      {
        name: 'BMW i4',
        fuelType: 'Full-Electric',
        price: 1841000000,
        imageUrl: '/images/cars/i4.jpg',
        categoryId: bmwI.id
      },
      {
        name: 'BMW iX1',
        fuelType: 'Full-Electric',
        price: 2225000000,
        imageUrl: '/images/cars/ix1.jpg',
        categoryId: bmwI.id
      },

      // BMW X models
      {
        name: 'BMW XM',
        fuelType: 'Plug-in-Hybrid',
        price: 8472000000,
        imageUrl: '/images/cars/xm.jpg',
        categoryId: bmwX.id
      },
      {
        name: 'BMW X7',
        fuelType: 'Gasoline',
        price: 1025000000,
        imageUrl: '/images/cars/x7.jpg',
        categoryId: bmwX.id
      },
      {
        name: 'BMW X3',
        fuelType: 'Gasoline',
        price: 1375000000,
        imageUrl: '/images/cars/x3.jpg',
        categoryId: bmwX.id
      },
      
      // Add BMW 2 Series
      {
        name: 'BMW 2 Series Coupé',
        fuelType: 'Gasoline',
        price: 1375000000,
        imageUrl: '/images/cars/2-series-coupe.jpg',
        categoryId: bmw2.id
      },
      {
        name: 'BMW 2 Series Gran Coupé',
        fuelType: 'Gasoline',
        price: 1235000000,
        imageUrl: '/images/cars/2-series-gran-coupe.jpg',
        categoryId: bmw2.id
      },
      
      // Add BMW 3 Series
      {
        name: 'BMW 3 Series Sedan',
        fuelType: 'Gasoline',
        price: 1675000000,
        imageUrl: '/images/cars/3-series-sedan.jpg',
        categoryId: bmw3.id
      },
      {
        name: 'BMW 3 Series Touring',
        fuelType: 'Gasoline',
        price: 1735000000,
        imageUrl: '/images/cars/3-series-touring.jpg',
        categoryId: bmw3.id
      },
      
      // Add BMW 5 Series
      {
        name: 'BMW 5 Series Sedan',
        fuelType: 'Gasoline',
        price: 2150000000,
        imageUrl: '/images/cars/5-series-sedan.jpg',
        categoryId: bmw5.id
      },
      {
        name: 'BMW 5 Series Touring',
        fuelType: 'Gasoline',
        price: 2250000000,
        imageUrl: '/images/cars/5-series-touring.jpg',
        categoryId: bmw5.id
      },
      
      // Add BMW 7 Series
      {
        name: 'BMW 7 Series Sedan',
        fuelType: 'Gasoline',
        price: 3245000000,
        imageUrl: '/images/cars/7-series-sedan.jpg',
        categoryId: bmw7.id
      }
    ]);
    
    console.log('Cars seeded');
    console.log('Database seeding completed');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the connection
    await sequelize.close();
  }
};

// Run the seeder
seedDatabase();