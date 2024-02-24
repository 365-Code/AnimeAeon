import BottomNav from '@/components/Nav/BottomNav'
import MyList from '@/components/MyList'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col'>
        <MyList />
        <BottomNav/>
    </div>
  )
}

export default Page