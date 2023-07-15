import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { BsCartPlus} from "react-icons/bs";
const WishlistSingle = ({ data }) => {

    return (
        <div className="border-b p-4">
            <div className="w-full flex items-center">
            <RxCross1 size={25} className='cursor-pointer' />
                <img src="https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg"
                className='w-[80px] h-[80px] ml-2'
                alt="" />
               

                <div className="pl-[5px]">
                    <h1>{data.name}</h1>
                    <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto'>₹{data.price}</h4>
                </div>

                <div>
                    <BsCartPlus size={20} className='cursor-pointer' title="Add to cart"/>
                </div>
                
            </div>
        </div>
    )
}

export default WishlistSingle;