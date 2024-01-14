import { create } from 'zustand'

interface Product {
  dataId: string
  image: string
  name: string
  price: number
}

export type CartProduct = Product & {
  quantity: number
}

interface CartState {
  cartItems: CartProduct[]
  addItemToCart: (item: Product) => void
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  addItemToCart: (item: Product) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.dataId === item.dataId)
      if (itemExists) {
        if (typeof itemExists.quantity === "number") {
          itemExists.quantity++;
        }
        set({ cartItems: [...get().cartItems] });
      } else {
        set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
      }
  },
  increaseQuantity: (productId) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.dataId === productId
    );
    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        itemExists.quantity++;
      }

      set({ cartItems: [...get().cartItems] });
    }
  },
  decreaseQuantity: (productId) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.dataId === productId
    );

    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        if (itemExists.quantity === 1) {
          const updatedCartItems = get().cartItems.filter(
            (item) => item.dataId !== productId
          );
          set({ cartItems: updatedCartItems });
        } else {
          itemExists.quantity--;
          set({ cartItems: [...get().cartItems] });
        }
      }
    }
  },
}))

export default useCartStore
