
import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
// Create Context
const CartContext = createContext();

// Initial state
const initialState = {
  items: [],
};

// Reducer function
const cartReducer = (state, action) => {
    const existingItem = state.items.find(item => item.id === action.payload.id);
  switch (action.type) {

    case 'ADD_TO_CART':
        
      if (existingItem) {
        return state; // Item already in cart, no changes
      }
     
      // If the item is not in the cart, add it
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'REMOVE_FROM_CART':
      // Remove the item from the cart based on id
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    case 'CLEAR_CART':
      // Empty the cart
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

// Provide context
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensure that 'children' is passed and is a valid React node
  };

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
