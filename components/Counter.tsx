'use client'
import React from 'react'
import useCartStore ,{CartProduct} from '@/store/useCartStore'

interface CartItemCardProps {
  product: CartProduct;
}

const Counter = ({ product }: CartItemCardProps) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore()

  const onIncreaseQuantity = (productId: string) => {
    increaseQuantity(productId)
  }

  const onDecreaseQuantity = (productId: string) => {
    decreaseQuantity(productId)
  }

  return (
    <div>
       <button
          onClick={() => onIncreaseQuantity(product.dataId)}
          title="Increase quantity"
          className="bg-orange-500 px-2 py-2 text-white rounded-full"
        >
          ➕
        </button>
        <h3 className="text-center mt-3 font-medium">
            Quantity: {product.quantity}
          </h3>
        <button
          onClick={() => onDecreaseQuantity(product.dataId)}
          title="Decrease Quantity"
          className="bg-orange-500 px-2 py-2 text-white rounded-full"
        >
          ➖
        </button>
    </div>
  )
}

export default Counter