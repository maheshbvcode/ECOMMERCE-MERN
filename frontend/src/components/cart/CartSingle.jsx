import React, { useState } from 'react'
import styles from '../../styles/style';
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from 'react-icons/rx';

const CartSingle = ({ data }) => {
    console.log(data)
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;

    return (
        <div className="border-b p-4">
            <div className="w-full flex items-center">
                <div >
                    <div className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
                        onClick={() => setValue(value + 1)}
                    >
                        <HiPlus size={18} color='#fff' />

                    </div>
                    <span className='pl-[8px]'>{value}</span>
                    <div className='bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer'
                        onClick={() => setValue(value === 1 ? 1 : value - 1)}
                    >
                        <HiOutlineMinus size={18} color='#7d87pc' />

                    </div>

                </div>
                <img src="https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg"
                className='w-[80px] h-[80px] ml-2'
                alt="" />

                <div className="pl-[5px]">
                    <h1>{data.name}</h1>
                    <h4 className='font-[400] text-[15px] text-[#00000082]'>₹{data.price} * {value}</h4>
                    <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto'>₹{totalPrice}</h4>
                </div>
                <RxCross1 size={25} className='cursor-poiner'/>
            </div>
        </div>
    )
}

export default CartSingle;