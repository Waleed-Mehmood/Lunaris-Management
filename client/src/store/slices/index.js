export { default as authSlice } from './authSlice';
export { default as exampleSlice } from './exampleSlice';

// Export actions for easy access
export { 
  register, 
  login, 
  logout, 
  reset as resetAuth 
} from './authSlice';

export { 
  fetchItems, 
  addItem, 
  removeItem, 
  reset as resetExample 
} from './exampleSlice';
