import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Table from 'react-bootstrap/Table';


function Search() {
   
    const [data,setData] = useState([]);

    const find = async (key) => {
        let res = await axios.get("http://localhost:8000/api/search/"+key)
        setData(res.data);
        console.log(res)
    }

  return (
    <div>
      <Header />
      <h1>Search Product</h1>
      <div className='col-sm-6 offset-sm-3' >

      <input
          type="text"
          placeholder='Search'
          className='form-control'
          onChange={(e) => find(e.target.value)}
        />
        <br/>

        <Table>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Description </th>
                        <th> Image </th>
                     </tr>
                </thead>


                {
                    data.map((item, index) =>
                        <tbody key={index}>
                            <tr>
                                <td> {item.id} </td>
                                <td> {item.name} </td>
                                <td> {item.price} </td>
                                <td> {item.description} </td>
                                <td> <img style={{width:100}} src={"http://localhost:8000/"+item.file_path}/> </td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>


     </div>
</div>
  )
}

export default Search;