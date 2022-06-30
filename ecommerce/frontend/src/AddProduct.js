import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useNavigate } from 'react-router';

 {/* php artisan storage:link  foto almak için*/}

        {/* {
         api/config/FileSystems dosyasından

         'links' => [
          public_path('products') => storage_path('app/products'),
      ],
         tablo adı deiştirildi (products)
        } */}


function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addProduct = async () => {

    const formData = new FormData();
    formData.append('file',file);
    formData.append('price',price);
    formData.append('name',name);
    formData.append('description',description);

     const result = await axios.post("http://localhost:8000/api/add", formData)
     navigate("/")
    }


  return (
    <div>
      <Header />
      <h1>Add Product</h1>
      <div className='col-sm-6 offset-sm-3' >

        <input
          type="text"
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
          className='form-control'
        />

        <br />

        <input
          type="file"
          className='form-control'
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br />

        <input
          type="number"
          placeholder='price'
          className='form-control'
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder='description'
          className='form-control'
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <button onClick={addProduct} className='btn btn-primary'>Add Product</button>

      </div>

    </div>
  )
}

export default AddProduct