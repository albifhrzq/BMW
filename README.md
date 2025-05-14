# BMW Website

Aplikasi katalog mobil BMW dengan tampilan modern menggunakan React dan database MySQL.

## Struktur Proyek

- **Frontend**: Aplikasi React untuk tampilan website
- **Backend**: API Express.js untuk mengelola data mobil
- **Database**: MySQL

## Setup dan Instalasi

### Persiapan Database

1. Buat database MySQL dengan nama "bmw_db" (atau sesuaikan di file konfigurasi)
2. Konfigurasikan koneksi database di `backend/.env` (jika perlu)

### Backend

1. Masuk ke direktori backend:
   ```
   cd backend
   ```

2. Install dependensi:
   ```
   npm install
   ```

3. Seed data awal:
   ```
   node seeders/seedDatabase.js
   ```

4. Jalankan server:
   ```
   npm run dev
   ```

### Frontend

1. Buka terminal baru dan masuk ke direktori frontend:
   ```
   cd frontend
   ```

2. Install dependensi:
   ```
   npm install
   ```

3. Jalankan aplikasi:
   ```
   npm start
   ```

4. Buka browser dan akses `http://localhost:3000`

## Fitur

- Halaman utama dengan showcase mobil BMW
- Halaman "Find Your BMW" dengan katalog lengkap
- Halaman login (fitur akan datang)
- Backend REST API untuk data mobil
- Database MySQL untuk penyimpanan data

## API Endpoints

### Categories
- GET `/api/categories` - Mendapatkan semua kategori
- GET `/api/categories/:id` - Mendapatkan kategori berdasarkan ID
- POST `/api/categories` - Membuat kategori baru
- PUT `/api/categories/:id` - Memperbarui kategori
- DELETE `/api/categories/:id` - Menghapus kategori

### Cars
- GET `/api/cars` - Mendapatkan semua mobil
- GET `/api/cars/:id` - Mendapatkan mobil berdasarkan ID
- GET `/api/cars/category/:categoryId` - Mendapatkan mobil berdasarkan kategori
- POST `/api/cars` - Menambahkan mobil baru
- PUT `/api/cars/:id` - Memperbarui data mobil
- DELETE `/api/cars/:id` - Menghapus mobil 