import React, { useEffect, useState } from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import Topbar from '../../component/topbar/Topbar';
import Sidebar from '../../component/sidebar/Sidebar';
import { userRequest } from '../../requestMethods';
import {useSelector} from "react-redux"


function UserList() {
    const user=useSelector(state=>state.user.currentUser)
    const [data, setData] = useState([]);
    useEffect(()=>{
        const getUsers=async()=>{
            const res=await userRequest.get("users/");
            setData(res.data)
            console.log(res.data)
        }
        user && getUsers()
    },[])
    const handleDelete = (_id) => {
        setData(data.filter(item => item._id !== _id))
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 240 },
        {
            field: 'username', headerName: 'User', width: 180, renderCell: (param) => {
                return (
                    <div className='userTableImg'>
                        <img src={param.row.avatar || "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"} alt="image" />
                        {param.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 180,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
            valueGetter:(value,row)=>'Active',
        },
        // {
        //     field: 'transaction',
        //     headerName: 'Transaction',
        //     width: 160,

        // },
        {
            field: 'action', headerName: "Action", width: 100, renderCell: (params) => {
                return (
                    <div className='userListAction'>
                        <Link to={"/user/" + params.row._id}>
                            <button className="userListEdit">
                                Edit
                            </button>
                        </Link>

                        <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row._id)} />
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


                <div className='userList'>
                    <DataGrid
                        rows={data}
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

export default UserList