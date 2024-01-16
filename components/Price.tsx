"use client";

import { useRouter } from 'next/navigation'
import { useCartStore,ProductType } from "@/store/useCartStore";
import React, { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter()
  const { addToCart } = useCartStore();

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  },[])

 

  const handleCart = ()=>{
    addToCart({
      id: product._id,
      name: product.name,
      image: product.image,
      price: total,
      quantity: quantity,
    })
    toast.success('🦄 The product added to the cart!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      setTimeout(() => {
        router.push('/shop');
      }, 3000);
      
      
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${(+total).toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
     
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button
          className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
          onClick={handleCart}
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Price;