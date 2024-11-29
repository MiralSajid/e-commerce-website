import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import orderReducer from '../features/orderSlice'


const store = configureStore({
  reducer: {
    orders: orderReducer,
    cart: cartReducer,
  },
});

export default store;
