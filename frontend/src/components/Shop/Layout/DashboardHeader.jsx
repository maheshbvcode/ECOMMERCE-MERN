import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
    const {seller} = useSelector((state)=> state.seller);
  return (
    <div className='w-full h-[80px] bg-white shadow sticky top-0 left-0 flex items-center justify-between px-4'>
        <div className="">
            <Link to='/dashboard'>
            <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="logo" />
            </Link>
        </div>
    </div>
  )
}

export default DashboardHeader