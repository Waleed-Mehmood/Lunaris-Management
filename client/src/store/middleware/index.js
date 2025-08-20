// Custom middleware for logging actions in development
export const loggerMiddleware = (store) => (next) => (action) => {
  if (process.env.NODE_ENV === 'development') {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
  }
  return next(action);
};

// Custom middleware for handling API errors
export const errorMiddleware = (store) => (next) => (action) => {
  if (action.type.endsWith('/rejected')) {
    console.error('API Error:', action.payload);
    // You can add toast notifications or other error handling here
  }
  return next(action);
};
