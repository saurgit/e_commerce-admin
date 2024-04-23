import React, { useEffect, useState } from 'react'
import './user.css'
import { PermIdentity, CalendarToday, LocalPhone, EmailOutlined, House, HouseOutlined, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import { userRequest } from '../../requestMethods'
import { useLocation } from 'react-router-dom'

function User() {
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    const [user,setUser]=useState([])


    useEffect(()=>{
        const getUser=async ()=>{
            const res=await userRequest.get("users/find/"+userId)
            console.log(res.data)
            setUser(res.data)
        }
        getUser()
    },[])

    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar/>

                <div className='userData'>
                    <div className="userTitleContainer">
                        <h1 className='userTitle'>
                            Edit User
                        </h1>
                        <Link to="/newuser">
                            <button className="userAddButton">
                                Create
                            </button>
                        </Link>
                    </div>
                    <div className="userContainer">
                        <div className="userShow">
                            <div className="userShowTop">
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"
                                    alt="image"
                                    className='userShowImg'
                                />
                                <div className='userShowTopTitle'>
                                    <span className="userShowUserName">
                                        {user.username}
                                    </span>
                                    <span className="userShowUserTitle">
                                        AutoBiographers
                                    </span>
                                </div>
                            </div>
                            <div className="userShowBottom">
                                <div className="userShowTitle">
                                    Account Details
                                </div>
                                <div className="userShowInfo">
                                    <PermIdentity className='userShowIcon' />
                                    <span className="userShowInfoTitle">
                                        {user.username}
                                    </span>
                                </div>
                                <div className="userShowInfo">
                                    <CalendarToday className='userShowIcon' />
                                    <span className="userShowInfoTitle">
                                        12.11.1985
                                    </span>
                                </div>
                                <div className="userShowTitle">
                                    Contact Details
                                </div>
                                <div className="userShowInfo">
                                    <LocalPhone className='userShowIcon' />
                                    <span className="userShowInfoTitle">
                                        +1 123 456 7890
                                    </span>
                                </div>
                                <div className="userShowInfo">
                                    <EmailOutlined className='userShowIcon' />
                                    <span className="userShowInfoTitle">
                                        {user.email}
                                    </span>
                                </div>
                                <div className="userShowInfo">
                                    <HouseOutlined className='userShowIcon' />
                                    <span className="userShowInfoTitle">
                                        khatra Mahal Shamshaan k saamne , Shaitaan Galli
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="userUpdate">
                            <span className="userUpdateTitle">
                                Edit
                            </span>
                            <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>Username</label>
                                        <input type="text" className="userUpdateInput" placeholder='Johnd@12' />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Full Name</label>
                                        <input type="text" className="userUpdateInput" placeholder='John Doe' />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Contact No.</label>
                                        <input type="text" className="userUpdateInput" placeholder='+91 1234567890' />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Email</label>
                                        <input type="text" className="userUpdateInput" placeholder='johnDoe@gmail.com' />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Address</label>
                                        <input type="text" className="userUpdateInput" placeholder='khatra Mahal Shamshaan k saamne , Shaitaan Galli' />
                                    </div>
                                </div>
                                <div className="userUpdateRight">
                                    <div className="userUpdateUpload">
                                        <img src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=400"
                                            alt="img" className="userUpdateImage" />
                                        <label htmlFor='file' className='userUpdateIcon'><Publish /></label>
                                        <input type="file" id='file' style={{ display: "none" }} />
                                    </div>
                                    <button className="userUpdateButton">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default User