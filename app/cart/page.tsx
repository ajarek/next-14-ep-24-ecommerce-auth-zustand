'use client'

import useCartStore from '@/store/useCartStore'

import Image from 'next/image'

const Cart = () => {
  const { cartItems } = useCartStore();
  

  

  return (
    <div className='flex min-h-full flex-col  py-8 px-24 max-sm:p-2'>
      <h1 className='text-2xl max-sm:text-xl font-bold text-center'>Cart</h1>
      <div className='flex flex-col gap-4  '>
        {cartItems.map((item: any) => (
          <div
            key={item.dataId}
            className='grid grid-cols-5 place-items-center  '
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
            <p className='text-xl max-sm:text-sm'>1</p>
            <p className='text-xl max-sm:text-sm w-[150px] max-lg:w-[80px] text-right '>
              {(+item.price).toFixed(2)} $
            </p>
            <button
              // onClick={() => deleteItem(item.dataId)}
              className='text-3xl text-red-700'
            >
              {' '}
              🗑{' '}
            </button>
          </div>
        ))}
      </div>
      <div className='w-full text-xl max-sm:text-lg flex justify-end mt-4'>
        To pay:{' '}
        <span className='text-2xl max-sm:text-xl font-bold ml-2'>
          {/* {(+payment).toFixed(2)} $ */}
        </span>{' '}
      </div>
    </div>
  )
}

export default Cart
