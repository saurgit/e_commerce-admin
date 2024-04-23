import React, { useEffect, useState } from 'react'
import './featuredInfo.css'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material'
import { userRequest } from '../../requestMethods'
function FeaturedInfo() {
    const [income, setIncome] = useState(0)
    const [percent,setPercent] = useState(0)


    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("orders/income")
                setIncome(res.data[1].total)
                setPercent(res.data[1].total*100 / res.data[0].total - 100)
            } catch { }
        }
        getIncome()
    },[])

    // console.log(income)
    // console.log(percent)


    return (

        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">
                    revanue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $ {income}
                    </span>
                    <span className="featuredMoneyRate">
                        {Math.round(percent)}%
                        {
                            percent < 0 ?(
                                <ArrowDownwardOutlined className='downArrow' />
                            ):(
                                <ArrowUpwardOutlined className='upArrow' />
                            )
                        }
                    </span>

                </div>
                <span className="featuredSubtitle">
                    compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        24234 $
                    </span>
                    <span className="featuredMoneyRate">
                        -123
                        <ArrowDownwardOutlined className='downArrow' />
                    </span>

                </div>
                <span className="featuredSubtitle">
                    compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        24234 $
                    </span>
                    <span className="featuredMoneyRate">
                        +767
                        <ArrowUpwardOutlined className='upArrow' />
                    </span>

                </div>
                <span className="featuredSubtitle">
                    compared to last month
                </span>
            </div>


        </div>


    )
}

export default FeaturedInfo