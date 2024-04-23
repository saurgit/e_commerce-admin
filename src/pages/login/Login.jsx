import React, { useState } from 'react'
import { useDispatch ,useSelector } from "react-redux"
import { login } from '../../redux/apiCalls'
import './login.css'
import {Navigate} from "react-router-dom"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching,error,currentUser,admin} = useSelector((state)=>state.user)
   
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }
    
    return (

        <>
            <div className='loginPage'>
                <h2 style={{marginBottom:20}}> ADMIN LOGIN</h2>
                <input type="text" placeholder='Username' className='loginInput' onChange={(e) => setUsername(e.target.value)} />
                <input type='text' placeholder='password' className='loginInput' onChange={(e) => setPassword(e.target.value)} />
                <button disabled={isFetching} onClick={handleClick} className='loginButton'>Login</button>
                {admin===false &&
                <span className='error'>
                    You are not an admin!
                </span>
                }
                {
                    error===true && <span className='error'>
                        Something went wrong!
                    </span>
                }
                {
                   currentUser&& currentUser.isAdmin && (
                        <Navigate to='/'/> 
                    ) 
                }
            </div>
        </>
    )
}

export default Login