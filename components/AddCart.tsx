'use client'
import { useRouter } from 'next/navigation'
import useCartStore from '@/store/useCartStore'

import { Button } from './ui/button'

interface AddCartProps {
  id: string
  price: number
  name: string
  image: string
}
type NewProduct = {
  dataId: string
  price: number
  name: string
  image: string
}

const AddCart = ({ id, price, name, image }: AddCartProps) => {
  const router = useRouter()
  const { addItemToCart } = useCartStore();
  const addToCart = () => {
    const newProduct: NewProduct = {
      dataId: id,
      price: price,
      name: name,
      image: image,
    }

    try {
      addItemToCart(newProduct);
    } catch (error) {
      console.error('Error occurred while saving to localStorage:', error)
    } finally {
      router.push('/cart')
    }
  }

  return (
    <div className='w-full flex'>
      <Button
        className='w-full bg-slate-900 text-white text-center py-2 rounded-md'
        onClick={addToCart}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default AddCart
