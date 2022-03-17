import React, { useState } from 'react'
import { img_300, unavailable } from "../config/config";

const Card = ({key, id, poster, title, date, media_type, vote_average, overview}) => {

 const [data, setData] = useState({
    name:`${title}`,
    release:`${date}`,
    rating:`${vote_average}`,
    desc:`${overview}`,
    imgS:`${poster ? `${img_300}${poster}` : unavailable}`
 })
  return (
    <div className='flex items-center w-3/6 h-56 gap-6 p-4 bg-white rounded-lg shadow-lg justify-evenly'>
        <div className='w-1/3 h-full '>
            <img src={data.imgS} className='w-full h-full bg-blue-500 ' alt='no photo'/>
        </div>
        <div className='flex flex-col items-center w-2/3 h-full gap-2'>
            <p className='w-full h-6 text-2xl text-black'>
               {data.name}
            </p>
            <p className='w-full h-6 text-xl text-gray-300'>
               {data.release}
            </p>
            <p className='w-full h-6 text-xl text-gray-300'>
               {data.rating}
            </p>
            <p className='w-full h-6 h-20 overflow-hidden text-xl text-gray-300'>
               {data.desc}
            </p>

        </div>
    </div>
  )
}

export default Card