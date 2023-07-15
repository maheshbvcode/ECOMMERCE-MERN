import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/style'

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex} mt-10`}>
         {
            navItems && navItems.map((i,index) => (
                <div key={index} className="flex select-none">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#17dd1f]" : "text-black 800px:text-[#fff]"} !pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar