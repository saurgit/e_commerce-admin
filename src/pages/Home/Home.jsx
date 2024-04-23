import React, { useEffect, useMemo, useState } from 'react'
import './home.css'
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo'
import Chart from '../../component/chart/Chart'
import { userData } from '../../dummyData'
import WidgetLg from '../../component/widgetLg/WidgetLg'
import WidgetSm from '../../component/widgetSm/WidgetSm'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import { userRequest } from '../../requestMethods'

function Home() {
  const [userStats, setUserStats] = useState([]);
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
        const res =await userRequest.get("users/stats")
        res.data.map((item) =>
          setUserStats((prev) =>[
              ...prev,
              {
                name: MONTHS[item._id - 1],
                "Active User": item.total
              }
            ])
        )
      } catch (err) {}
    }
    getStats();
  }, [MONTHS])

  // console.log(userStats)

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className='home'>
          <FeaturedInfo />
          <Chart data={userStats} title="User Analytics" dataKey="Active User"  aspect={4} />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home