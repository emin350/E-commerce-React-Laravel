import React, { useState, useEffect } from 'react'
import Header from './Header';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

function ProductList() {
    
    const endpoint = "http://localhost:8000/api"
    const [data, setData] = useState([]);

    useEffect(() => {
        result();
    }, [])

    const result = async () => {
        let res = await axios.get(`${endpoint}/list`)
        setData(res.data);
    }

    const deleteOp = async (id) => {
       
        await axios.delete(`${endpoint}/delete/${id}`)
        result();
    }


    return (
        <div>
            <Header />
            <h1> Product List</h1>
            <div className='col-sm-8 offset-sm-2' >
            <Table>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Description </th>
                        <th> Image </th>
                        <th> Action </th>
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
                                <td> <span onClick={() => deleteOp(item.id)} className='delete'>Delete</span>
                                     <Link to={"update/"+item.id}> <span className='update'>Edit</span> </Link>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
            </div>
        </div>
    )
}

export default ProductList;