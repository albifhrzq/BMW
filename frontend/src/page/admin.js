import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './admin.css';
import Navbar from '../components/navbar';

export default function AdminPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'
  const [currentCar, setCurrentCar] = useState({
    name: '',
    fuelType: '',
    price: '',
    imageUrl: '',
    categoryId: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const categoriesResponse = await axios.get('http://localhost:5000/api/categories');
      const carsResponse = await axios.get('http://localhost:5000/api/cars');
      
      setCategories(categoriesResponse.data);
      setCars(carsResponse.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCar({
      ...currentCar,
      [name]: name === 'price' ? parseFloat(value) || '' : value
    });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Untuk preview gambar
      const reader = new FileReader();
      reader.onload = (e) => {
        // Update imageUrl dengan path sementara
        const fileName = file.name;
        setCurrentCar({
          ...currentCar,
          imageUrl: `/images/cars/${fileName}`
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const resetForm = () => {
    setCurrentCar({
      name: '',
      fuelType: '',
      price: '',
      imageUrl: '',
      categoryId: ''
    });
    setSelectedFile(null);
    setFormError('');
  };

  const handleAddNew = () => {
    setFormMode('add');
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (car) => {
    setFormMode('edit');
    setCurrentCar({
      id: car.id,
      name: car.name,
      fuelType: car.fuelType,
      price: car.price,
      imageUrl: car.imageUrl || '',
      categoryId: car.categoryId
    });
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    resetForm();
  };

  const validateForm = () => {
    if (!currentCar.name) return "Nama mobil harus diisi";
    if (!currentCar.fuelType) return "Tipe bahan bakar harus diisi";
    if (!currentCar.price) return "Harga harus diisi";
    if (!currentCar.categoryId) return "Kategori harus dipilih";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }

    try {
      // Gunakan FormData untuk mengirim file ke server
      const formData = new FormData();
      formData.append('name', currentCar.name);
      formData.append('fuelType', currentCar.fuelType);
      formData.append('price', currentCar.price);
      formData.append('categoryId', currentCar.categoryId);
      
      // Jika ada file yang dipilih, tambahkan ke FormData
      if (selectedFile) {
        formData.append('image', selectedFile);
      } else if (currentCar.imageUrl) {
        // Jika tidak ada file baru tapi ada URL gambar
        formData.append('imageUrl', currentCar.imageUrl);
      }

      console.log('Submitting form with data:', {...currentCar, file: selectedFile?.name});
      
      // Kirim ke endpoint yang sesuai
      if (formMode === 'add') {
        await axios.post('http://localhost:5000/api/cars', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        await axios.put(`http://localhost:5000/api/cars/${currentCar.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }
      
      fetchData();
      setShowForm(false);
      resetForm();
    } catch (error) {
      console.error('Error saving car:', error);
      setFormError('Terjadi kesalahan saat menyimpan data: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus mobil ini?')) {
      try {
        await axios.delete(`http://localhost:5000/api/cars/${id}`);
        fetchData();
      } catch (error) {
        console.error('Error deleting car:', error);
        alert('Terjadi kesalahan saat menghapus data');
      }
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="loading">Memuat...</div>;
  }

  return (
    <div className="admin-container">
      <Navbar />
      <header className="admin-header">
        <h1>Admin Panel - BMW Models</h1>
        <button className="back-button" onClick={handleBack}>
          Kembali ke Website
        </button>
      </header>

      <div className="admin-content">
        <div className="admin-actions">
          <button className="add-button" onClick={handleAddNew}>
            Tambah Model Baru
          </button>
        </div>

        <table className="cars-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Kategori</th>
              <th>Bahan Bakar</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.category ? car.category.name : '-'}</td>
                <td>{car.fuelType}</td>
                <td>{formatPrice(car.price)}</td>
                <td className="action-buttons">
                  <button className="edit-button" onClick={() => handleEdit(car)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(car.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="car-form">
            <h2>{formMode === 'add' ? 'Tambah Model Baru' : 'Edit Model'}</h2>
            
            {formError && <div className="form-error">{formError}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama Model</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={currentCar.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="categoryId">Kategori</label>
                <select
                  id="categoryId"
                  name="categoryId"
                  value={currentCar.categoryId}
                  onChange={handleInputChange}
                >
                  <option value="">Pilih Kategori</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="fuelType">Bahan Bakar</label>
                <select
                  id="fuelType"
                  name="fuelType"
                  value={currentCar.fuelType}
                  onChange={handleInputChange}
                >
                  <option value="">Pilih Bahan Bakar</option>
                  <option value="Gasoline">Gasoline</option>
                  <option value="Full-Electric">Full-Electric</option>
                  <option value="Plug-in-Hybrid">Plug-in-Hybrid</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="price">Harga (IDR)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={currentCar.price}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="imageUrl">Gambar</label>
                <div className="file-input-group">
                  <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={currentCar.imageUrl}
                    onChange={handleInputChange}
                    placeholder="Path gambar"
                    className="file-path-input"
                  />
                  <button 
                    type="button" 
                    className="browse-button"
                    onClick={handleBrowseClick}
                  >
                    Browse...
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                </div>
                {selectedFile && (
                  <div className="file-selected">
                    File terpilih: {selectedFile.name}
                  </div>
                )}
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-button" onClick={handleCloseForm}>
                  Batal
                </button>
                <button type="submit" className="save-button">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 