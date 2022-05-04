const initialState = [];


const cartProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const {product} = action;
      return [...state,product];

    case "RM_TO_CART":
      const {cartProduct} = action;
      // console.log(cartProduct)
      const something = state.filter((prod)=>prod.name!=cartProduct.name)
      return [...something];

    default:
      return state;
  }
};

export default cartProductsReducer;