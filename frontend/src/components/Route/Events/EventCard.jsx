import React from 'react'
import styles from '../../../styles/style.js';
import CountDown from "./CountDown.jsx";

const EventCard = ({active}) => {
    return (
        <div className={`w-full block bg-white rounded-lg ${active? "unset" :"mb-12"} lg:flex p-2`}>
            <div className="w-full lg-w[50px] m-auto">
                <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt=""
                />
            </div>

            <div className='w-full lg:[w-50%] flex flex-col justify-center'>
                <h2 className={`${styles.productTitle}`}>iPhone 14pro Max 8gb-RAM</h2>
                <p>
                    iPhone 14 and iPhone 14 Pro can detect a severe car crash and call for help. Requires a cellular connection or Wi-Fi calling.
                    The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.
                    When measured as a standard rectangular shape, the screen is 13.76 centimetres / 5.42 inches (iPhone 13 mini, iPhone 12 mini),
                    14.86 centimetres / 5.85 inches (iPhone 11 Pro, iPhone XS, iPhone X), 15.40 centimetres / 6.06 inches (iPhone 14, iPhone 13 Pro,
                    iPhone 13, iPhone 12 Pro, iPhone 12, iPhone 11, iPhone XR), 15.54 centimetres / 6.12 inches (iPhone 14 Pro), 16.40 centimetres / 6.46 inches (iPhone 11 Pro Max,
                    iPhone XS Max), 16.95 centimetres / 6.68 inches (iPhone 14 Plus, iPhone 13 Pro Max, iPhone 12 Pro Max) or 17.00 centimetres / 6.69 inches (iPhone 14 Pro Max) diagonally.
                    Actual viewable area is less.
                </p>
                <div className="flex py-2 justify-between">
                    <div className="flex">
                        <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through'>
                        ₹130000
                        </h5>
                        <h5 className='font-bold text-[20px] text-[#333] font-Roboto'>
                        ₹99999
                        </h5>

                    </div>
                    <span className='pr-3 font-[400] text-[17px] text-[#44a55e]'>
                        778 sold
                    </span>
                </div>
                <CountDown/>
            </div>

        </div>
    )
}

export default EventCard