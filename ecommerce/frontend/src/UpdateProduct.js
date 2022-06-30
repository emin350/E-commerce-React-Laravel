import Header from './Header'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
  const endpoint = "http://localhost:8000/api"
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const edit = async () => {
    
  let res = await axios.get(`${endpoint}/product/${id}`)
    console.log(res)
            setDescription(res.data.description)
            setPrice(res.data.price)
            setName(res.data.name)
            setFile(res.data.file_path)
            }

  useEffect(() => {
    edit();
  }, [])

  const updater = async () =>  {
    const formData = new FormData();
    formData.append('file',file);

   await axios.put(`${endpoint}/edit/${id}`,{
    description:description,
    price:price,
    name:name,
    formData
   })
   navigate('/');
}


  return (
    <div>
      <Header />
      <h1>Edit Product</h1>
      <div className='col-sm-6 offset-sm-3' >

        <input
          type="text"
          placeholder='name'
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="number"
          placeholder='price'
          className='form-control'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder='description'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
<br />
        <input
          type="file"
          className='form-control'
          onChange={(e) => setFile(e.target.files[0])}
          file={file}
         />

   <br/>
   <img style={{width:200}} src={"http://localhost:8000/"+file}/>
<br />
<br />


<button onClick={updater} className='btn btn-primary'>Edit Product</button>

      </div>

    </div>
  )
}

export default UpdateProduct;