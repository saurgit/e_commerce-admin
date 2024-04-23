import React, { useState,useMemo,useEffect } from 'react'
import './product.css'
import { Link, useLocation } from 'react-router-dom'
import Chart from '../../component/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import {useSelector} from 'react-redux'

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [pStats,setPStats] = useState([])

    const product = useSelector((state) =>
        state.product.product.find(product =>
            product._id === productId
        )
    )
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ], []);
    useEffect(() => {
        const getStats = async () => {
            try {
            const res =await userRequest.get("orders/income?pid=" + productId)
            const list = res.data.sort((a,b)=>{
                return a._id - b._id
            })
            list.data.map((item) =>
                setPStats((prev) =>[
                    ...prev,
                    {
                    name: MONTHS[item._id - 1],
                    "Sales": item.total
                    }
                ])
            )
            } catch (err) {}
        }
        getStats();
    }, [MONTHS])
        
    


    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />

                <div className='product'>
                    <div className="productTitleContainer">
                        <h1 className="productTitle">
                            {product.title}
                        </h1>
                        <Link to="/newproduct">
                            <button className="productAddButton">
                                Create
                            </button>
                        </Link>
                    </div>
                    <div className="productTop">
                        <div className="productTopLeft">
                            <Chart data={pStats} dataKey="Sales" title="Sales Performance" grid aspect={2} />
                        </div>
                        <div className="productTopRight">
                            <div className="productInfoTop">
                                <img src={product.img}
                                    alt="Product Image"
                                    className="productInfoImg" />
                            </div>
                            <div className="productInfoBottom">
                                <div className="productName">{product.title}</div>
                                <div className="productInfoItem">
                                    <div className="productInfoKey">
                                        ID:
                                    </div>
                                    <div className="productInfoValue">
                                        {product._id}
                                    </div>
                                </div>
                                <div className="productInfoItem">
                                    <div className="productInfoKey">
                                        Price:
                                    </div>
                                    <div className="productInfoValue">
                                        {product.price}
                                    </div>
                                </div>
                                <div className="productInfoItem">
                                    <div className="productInfoKey">
                                        Sales:
                                    </div>
                                    <div className="productInfoValue">
                                        12
                                    </div>
                                </div>
                                
                                <div className="productInfoItem">
                                    <div className="productInfoKey">
                                        Instock:
                                    </div>
                                    <div className="productInfoValue">
                                        {product.inStock ? "YES":"NO"}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="productBottom">
                        <form className="productForm">
                            <div className="productFormLeft">
                            <label htmlFor="">
                                    Product Name
                                </label>
                                <input type="text" placeholder={product.title} />
                                <label htmlFor="">
                                    Product description
                                </label>
                                <input type="text" placeholder={product.desc} />
                                <label htmlFor="">
                                    Price
                                </label>
                                <input type="text" placeholder={product.price} />
                                <label>In Stock</label>
                                <select name="inStock" id="inStock" className="inStock">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                               
                            </div>
                            <div className="productFormRight">
                                <div className="productUpload">
                                    <img src={product.img}
                                        alt="img"
                                        className="productUploadImg" />
                                    <label htmlFor="file" className='changeImgCont'>
                                        <Publish />
                                        <div className="changImgText">
                                            change Image
                                        </div>
                                    </label>
                                    <input type='file' id='file' style={{ display: "none" }} />
                                </div>
                                <button className='productButton'>Update</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
