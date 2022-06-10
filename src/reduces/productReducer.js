const initState = {
    // ke hang
    cart: [],
    heart: []
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
      case "DELETE_WISHLIST":
        return {
          ...state,
          heart: state.heart.filter((x)=>x._id != action.data._id)
        };
  
      default:
        return state;
    }
  };
  
export default productReducer;
  