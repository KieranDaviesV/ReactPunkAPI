import { createStore, applyMiddleware, combineReducers } from "redux";
import beerReducer, { IBeerState } from "../reducers/beerReducer";
import thunk from "redux-thunk";
import modalReducer, { IModalState } from "../reducers/modalReducer";
import tabReducer from "../reducers/tabReducer";
import cartReducer, { ICartState } from "../reducers/cartReducer";
import sortReducer, { ISortState } from "../reducers/sortReducer";

export interface IAppState {
  beer: IBeerState;
  modal: IModalState;
  cart: ICartState;
  tabs: number;
  sort: ISortState;
}

const rootReducer = combineReducers({
  beer: beerReducer,
  modal: modalReducer,
  tabs: tabReducer,
  cart: cartReducer,
  sort: sortReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
