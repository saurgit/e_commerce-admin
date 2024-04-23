import React from 'react'
import './sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  CurrencyRupee,
  BarChartOutlined,
  MailOutlined,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutlineOutlined,
  Report
} from '@mui/icons-material'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            DashBoard
          </h3>
          <ul className="sidebarList active">
            <Link to="/" className='link'>
              <li className="sidebarListItem">
                <LineStyle className='sidebarIcon' />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon' />
              sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Quick Menu
          </h3>

          <ul className="sidebarList active">
            <Link to="/users" className='link'>
              <li className="sidebarListItem">
                <PersonOutline />
                User
              </li>
            </Link>
            <Link to="/products" className='link'>
              <li className="sidebarListItem">
                <Storefront className='sidebarIcon' />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <CurrencyRupee className='sidebarIcon' />
              Transaction
            </li>
            <li className="sidebarListItem">
              <BarChartOutlined className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Notification
          </h3>
          <ul className="sidebarList active">
            <li className="sidebarListItem">
              <MailOutlined className='sidebarIcon' />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className='sidebarIcon' />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Staff
          </h3>
          <ul className="sidebarList active">
            <li className="sidebarListItem">
              <WorkOutlineOutlined className='sidebarIcon' />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              analytics
            </li>
            <li className="sidebarListItem">
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>



      </div>

    </div>
  )
}

export default Sidebar