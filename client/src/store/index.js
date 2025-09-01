import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import propertySlice from './slices/propertySlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    property: propertySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});
