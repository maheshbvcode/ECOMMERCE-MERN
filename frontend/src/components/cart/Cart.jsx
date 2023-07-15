import React from 'react'
import styles from '../../styles/style'
import { RxCross1 } from 'react-icons/rx'
import { IoBagHandleOutline } from "react-icons/io5"
import CartSingle from "./CartSingle.jsx";
import { Link } from 'react-router-dom';
const Cart = ({ setOpenCart }) => {
    const cartData = [
        {
            name: "iPhone 14 pro max 256gb ssd and 8gb ram gold color",
            description: "test",
            price: 120000
        },
        {
            name: "MacBook-pro-M2-chipset-256gb-ssd-8gb-ram-space-gray-color-with-apple-1-year-warranty",
            description: "test3",
            price: 188800
        },
        {
            name: "New-Trend-shoes-for-gents-with-all-sizes",
            description: "test4",
            price: 1200
        },
    ]
    return (
        <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10 select-none'>
            <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
                <div>
                    <div className="flex w-full justify-end pt-5 pr-5">
                        <RxCross1
                            size={25}
                            className='cursor-pointer'
                            onClick={() => setOpenCart(false)}
                        />
                    </div>


                    {/* item length */}
                    <div className={`${styles.noramlFlex} p-4`}>
                        <IoBagHandleOutline size={25} />
                        <h5 className='pl-2 text-[20px] font-[500]'>
                            4 items
                        </h5>
                    </div>
                    {/* item length */}

                    {/* cart single Items */}
                        <br/>
                        <div className='w-full border-t'>
                            {
                                cartData && cartData.map((i,index)=>(
                                    <CartSingle key={index} data={i}/>
                                ))
                            }

                        </div>
                    {/* cart single Items */}

                    <div className="px-5 mb-3">
                        {/* checkout button */}
                        <Link to="/checkout">
                            <div  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}>
                                <h1 className='text-white text-[18px] font-[600]'>Checkout Now 100000</h1>
                            </div>
                        </Link>
                         {/* checkout button */}
                    </div>
                </div>


            </div>
        </div>
    )
};


export default Cart