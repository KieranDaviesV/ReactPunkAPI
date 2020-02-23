import { BEER_SELECTED } from "../constants/action.const";
import IBeer from "../interfaces/IBeer.interface";
export interface IModalState {
  isOpen: boolean;
  modalBeer: IBeer | {};
}

const initalstate:IModalState = {
  isOpen: false,
  modalBeer: {}
};

const modalReducer = (state = initalstate, action: any) => {
  console.log("modal reducer", action);
  switch (action.type) {
    case BEER_SELECTED:
      state.isOpen = action.payload.setBool;
      state.modalBeer = action.payload.beer;
      return state;
    default:
      return state;
  }
};

export default modalReducer;
