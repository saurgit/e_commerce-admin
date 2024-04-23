import React, { useState, useEffect } from 'react'
import './widgetLg.css'
import { userRequest } from '../../requestMethods';
import {format} from 'timeago.js'

function WidgetLg() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      const res = await userRequest.get("orders")
      setOrders(res.data)
    }
    getOrders();
  }, []);

  // console.log(orders)

  const Button = ({ type }) => {
    return (
      <button className={"widgetLgBtn " + type}>{type}</button>
    )
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">
        Latest Transaction
      </h3>
      <table className="widgetTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">
            Customer
          </th>
          <th className="widgetLgTh">
            Date
          </th>
          <th className="widgetLgTh">
            Amount
          </th>
          <th className="widgetLgTh">
            Status
          </th>

        </tr>
        {
          orders.map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" className="widgetLgUserImg" />
                <span className="widgetLgUserName">
                  {order.userId.username}
                </span>
              </td>
              <td className="widgetLgDate">
                {format(order.createdAt)}
              </td>
              <td className="widgetLgAmount">
                {order.amount}
              </td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))
        }

      </table>

    </div>
  )
}

export default WidgetLg