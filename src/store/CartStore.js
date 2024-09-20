import { create } from "zustand";
import { persist } from "zustand/middleware";


export const UseCartStore = create((set)=>({
    cart: [],
    setCart: (newCart) => set({cart: newCart})
}))
