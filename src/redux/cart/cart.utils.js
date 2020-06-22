export const addItemToCart = (cartItems , cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    if(existingCartItem){
        existingCartItem.quantity = existingCartItem.quantity + 1;
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? existingCartItem : cartItem)
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}