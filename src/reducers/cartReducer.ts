import IBeer from "../interfaces/IBeer.interface";
import {
  OPEN_CART,
  ADD_TO_CART,
  UPDATE_QUANTITY
} from "../constants/action.const";

interface ICartItem extends IBeer {
  quantity: number;
}
export interface ICartState {
  isCartOpen: boolean;
  cart: { [key: string]: ICartItem };
  totalCost: number;
}
const initalState: ICartState = {
  isCartOpen: false,
  cart: {},
  totalCost: 0
};
const cartReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case OPEN_CART:
      state.isCartOpen = action.payload;
      return state;
    case ADD_TO_CART:
      const id = action.payload.id;
      const aCart = state.cart;
      let quantity = 1;
      //if already exists in cart add one to quanity
      if (state.cart[id]) {
        quantity = state.cart[id].quantity + 1;
      }
      
      aCart[id] = { ...action.payload, quantity: quantity };
      const newTotal = createTotalCost(aCart);
      return {
        ...state,
        cart: { ...aCart },
        totalCost: newTotal
      };
    case UPDATE_QUANTITY:
      const beerId = action.payload.beerId;
      let newCart = state.cart;
      if (action.payload.quantity === 0) {
        delete newCart[beerId];
      } else {
        newCart[beerId].quantity = action.payload.quantity;
      }
      const totalCost = createTotalCost(newCart);
      return {
        ...state,
        isCartOpen: true,
        totalCost,
        cart: { ...newCart }
      };
    default:
      return state;
  }
};

const createTotalCost = (cart: any) => {
  const keys = Object.keys(cart);
  let total = 0;
  keys.forEach(key => {
    const item = cart[key];
    let math = item.quantity * item.abv;
    total += math;
  });
  return total;
};
// const addToCart =  =>{

// }
export default cartReducer;
