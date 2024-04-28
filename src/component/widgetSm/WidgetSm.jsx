import React, { useEffect, useState } from 'react'
import './widgetSm.css'
import { Visibility } from '@mui/icons-material';
import { userRequest } from '../../requestMethods';

export default function WidgetSm() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const res = await userRequest.get("users?new=true")
            setUsers(res.data)
        }
        getUsers();
    }, []);

    return (

        <div className='widgetSm'>
            <span className="widgetSmTitle">
                New Join members
            </span>
            <ul className="widgetSmList">
                {
                    users.map((user) => (
                        <li className="widgetSmListItem" key={user._id}>
                            <div className='userImgName'>

                                <img src={user.img ||
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQBp18y2sj__nT3dDnl7oQvuZ8JVCnQ8wsmo4dQYhaQ&s"
                                }
                                    alt="img"
                                    className='widgetSmUserImg' />
                                <div className="widgetSmUser">
                                    <span className="widgetSmUsername">
                                        {user.username}
                                    </span>
                                    {/* <span className="widgetSmUserTitle">
                                    Software Engineer
                                </span> */}
                                </div>
                            </div>
                            <button className='widgetSmButton'>
                                <Visibility className='widgetSmIcon' />
                                Display
                            </button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
