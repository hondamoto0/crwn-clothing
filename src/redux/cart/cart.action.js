import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item =>{ 
    console.log(item);
    return({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})
}
