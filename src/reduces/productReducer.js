const initState = {
    // ke hang
    cart: [],
    heart: [],
    electrics: []
  };
  const productReducer = (state = initState, action) => {
    console.log("action", action); // => {type: 'FROM_A', data: 'socola'}
    switch (action.type) {
      case "ADD_PRODUCT":
        return {
          ...state,
          cart: [...state.cart, action.data]
        };
      case "ADD_WISHLIST":
        return {
          ...state,
          heart: [...state.heart, action.data]
        };
      case "FROM_E":
        return {
          ...state,
          electrics: [...state.electrics, action.data]
        };
  
      default:
        return state;
    }
  };
  
export default productReducer;
  