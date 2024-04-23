import React, { useState } from 'react'
import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
// import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import Topbar from '../../component/topbar/Topbar';
import Sidebar from '../../component/sidebar/Sidebar';
import {useDispatch} from "react-redux"
import { useEffect } from 'react';
import { getProduct ,deleteProduct } from '../../redux/apiCalls';

import { useSelector } from 'react-redux';


function ProductList() {
  
  const dispatch=useDispatch()
  const products=useSelector((state)=> state.product.product)
  // console.log(products)

  useEffect(()=>{
    getProduct(dispatch)
  },[])
  
  const handleDelete = (id) => {
    deleteProduct(dispatch,id)
    // setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'product', headerName: 'Product', width: 180, renderCell: (param) => {
        return (
          <div className='productTableImg'>
            <img src={param.row.img} alt="image" />
            {param.row.title}
          </div>
        )
      }
    },

    {
      field: 'inStock',
      headerName: 'Stock',
      width: 100,
    },
   
    {
      field: 'price',
      headerName: 'Price',
      width: 160,

    },
    {
      field: 'action', headerName: "Action", width: 100, renderCell: (params) => {
        return (
          <div className='productListAction'>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">
                Edit
              </button>
            </Link>

            <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row._id)} />
          </div>
        )
      }
    }
  ];

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className='productList'>
          <DataGrid
            rows={products}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            getRowId={row=>row._id}
            rowsPerPage={10}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </div>
      </div>
    </>
  )
}

export default ProductList