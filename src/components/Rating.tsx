import React from 'react'

const Rating = ({rate}: {rate: number}) => {
  return (
    <div className='bg-[#06c149] absolute top-3 font-medium left-2 text-xs rounded-lg py-1 px-2 z-10 w-fit h-fit'>
        {rate}
    </div>
  )
}

export default Rating