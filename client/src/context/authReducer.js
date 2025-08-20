export const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  isLoaded: false,
  error: null
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_LOADING':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        isLoaded: true,
        error: null
      };
    
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    
    case 'AUTH_ERROR':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        isLoaded: true,
        error: action.payload
      };
    
    case 'AUTH_LOADED':
      return {
        ...state,
        isLoaded: true,
        isLoading: false
      };
    
    case 'LOGOUT':
      return {
        ...initialState,
        isLoaded: true
      };
    
    case 'CLEAR_ERRORS':
      return {
        ...state,
        error: null
      };
    
    default:
      return state;
  }
};
