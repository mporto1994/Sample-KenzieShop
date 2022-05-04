export const addToCart = (product) => (
  {
    type:"ADD_TO_CART",
    product
  }
)
export const rmToCart = (cartProduct) => (
  {
    type:"RM_TO_CART",
    cartProduct
  }
)