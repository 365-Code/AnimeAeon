"use client"
import { removeChar } from '@/utils'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

const NavTop = ({title}: {title?: string}) => {

  const nav = useRouter()
  const pathname = usePathname()

  return (
    <div className='flex items-center justify-between py-2'>
      <div className='flex gap-2 items-center'>
      <button onClick={()=>nav.back()}>
        <i className='fi fi-rr-arrow-small-left text-xl ' />
      </button>
      <span className='capitalize text-lg font-medium'>
        {pathname.split('/').reverse()[0]}
      </span>
      </div>

      <button className=''>
        <i className='fi fi-rr-search text-xl' />
      </button>

    </div>
  )
}

export default NavTop