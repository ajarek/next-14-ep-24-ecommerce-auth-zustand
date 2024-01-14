'use client'
import { useEffect } from 'react'
import {useCartStore} from '@/store/useCartStore'

import Image from 'next/image'

const Cart = () => {
  const {  products,  removeFromCart, totalPrice} = useCartStore();
  
useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  


  return (
    <div className='flex min-h-full flex-col  py-8 px-24 max-sm:p-2'>
      <h1 className='text-2xl max-sm:text-xl font-bold text-center'>Cart</h1>
      <div className='flex flex-col gap-4  '>
        { products.map((item: any) => (
          <div
            key={item.dataId}
            className='grid grid-cols-6 place-items-center  '
          >
            <Image
              src={item.image}
              alt='icon categories'
              width={50}
              height={50}
              className=' max-sm:w-[30px] max-sm:h-[30px]'
            />
            <p className='w-[250px] text-xl max-sm:text-center max-sm:text-sm max-sm:w-[100px] '>
              {item.name}
            </p>
            <p className='text-xl max-sm:text-sm'>{item.quantity}</p>
            <p className='text-xl max-sm:text-sm w-[150px] max-lg:w-[80px] text-right '>
              {(+item.price).toFixed(2)} $
            </p>
            <p className='text-xl max-sm:text-sm'>{(item.quantity*item.price).toFixed(2)} $</p>
            <button
               onClick={() =>  removeFromCart(item)}
              className='text-3xl text-red-700'
            >
              {' '}
              🗑{' '}
            </button>
          </div>
        ))}
      </div>
      <p className='text-right text-xl font-bold'>Total Price {(+totalPrice).toFixed(2)} $</p>
    </div>
  )
}

export default Cart
