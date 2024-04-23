import React from 'react'
import './topbar.css'
import { Badge } from '@mui/material';
import {NotificationsNone,Language,Settings} from '@mui/icons-material';

function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    Saurabh Admin
                </span>
            
            </div>
            <div className="topRight">

                <div className="topbarIconContainer">
                    <Language className='icon'/>
                    <Settings className='icon'/>
                   <Badge badgeContent={4} color="primary" className='icon'>
                    <NotificationsNone/>
                   </Badge>
                    <img className='profImg' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt='profile'/>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Topbar