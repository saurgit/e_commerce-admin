import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({data,title,dataKey,grid,aspect}) {
    return (
        <>
            <div className='chart'>
                <h3 className="chartTitle">
                    {title}
                </h3>
                <ResponsiveContainer width="100%" aspect={aspect}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke='#5c56b9' />
                        <YAxis/>
                        <Line type="monotone" dataKey={dataKey} stroke='#535245' />
                        <Tooltip/>
                        {grid && <CartesianGrid/>}
                        <Legend/>
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </>
    )
}

export default Chart