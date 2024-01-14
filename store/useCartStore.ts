import { ActionTypes, CartType } from '/useCartStore'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ProductType = {
  _id: string
  name: string
  description?: string
  image?: string
  price: number
}

export type CartItemType = {
  id: string
  name: string
  image?: string
  price: number
  quantity: number
}

export type CartType = {
  products: CartItemType[]
  totalItems: number
  totalPrice: number
}

export type ActionTypes = {
  addToCart: (item: CartItemType) => void
  removeFromCart: (item: CartItemType) => void
}

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
}

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,

      addToCart(item: CartType) {
        const products = get().products
        const productInState = products.find(
          (product: { id: string }) => product.id === item.id
        )

        if (productInState) {
          const updatedProducts = products.map((product: CartItemType) =>
            product.id === productInState.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  price: item.price + product.price,
                }
              : item
          )
          set((state: CartType) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }))
        } else {
          set((state: CartType) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + Number(item.price),
          }))
        }
      },
      removeFromCart(item: CartType) {
        set((state: CartType) => ({
          products: state.products.filter(
            (product: CartItemType) => product.id !== item.id
          ),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }))
      },
    }),
    { name: 'cart', skipHydration: true }
  )
)
