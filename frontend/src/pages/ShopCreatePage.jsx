import React, { useEffect } from 'react'
import ShopCreate from "../components/Shop/ShopCreate.jsx"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ShopCreatePage = () => {

  const { isSeller,seller } = useSelector((state)=> state.seller);
  const navigate = useNavigate();

  useEffect(()=>{
      console.log(isSeller)
      if(isSeller){
        navigate(`/shop/${seller._id}`)
      }
  },[]);
  return (
    <>
    <ShopCreate/>
    </>
  )
}

export default ShopCreatePage