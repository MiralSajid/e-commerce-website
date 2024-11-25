import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.uniqueKey === newItem.uniqueKey
      );

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the exact item exists
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.uniqueKey !== action.payload.uniqueKey
      );
    },
    updateQuantity: (state, action) => {
      const { uniqueKey, quantity } = action.payload;
      const item = state.items.find((item) => item.uniqueKey === uniqueKey);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
