import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      incrementCartItem: (payload) =>
        set((state) => {
          const { itemId, itemName, itemPrice } = payload;
          const existingItem = state.cartItems.find(
            (item) => item.id === itemId
          );

          if (existingItem) {
            const updatedCart = state.cartItems.map((item) =>
              item.id === itemId ? { ...item, count: item.count + 1 } : item
            );

            return { ...state, cartItems: updatedCart };
          } else {
            return {
              ...state,
              cartItems: [
                ...state.cartItems,
                { id: itemId, name: itemName, price: itemPrice, count: 1 },
              ],
            };
          }
        }),
      decrementCartItem: (payload) =>
        set((state) => {
          const { itemId } = payload;
          const updatedCart = state.cartItems.map((item) =>
            item.id === itemId
              ? { ...item, count: Math.max(0, item.count - 1) }
              : item
          );
          return { ...state, cartItems: updatedCart };
        }),
      removeCartItem: (itemId) =>
        set((state) => ({
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== itemId),
        })),
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
