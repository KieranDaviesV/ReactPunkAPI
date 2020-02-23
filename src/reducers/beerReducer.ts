import { ADD_BEERS, UPDATE_PAGE_NUMBER } from "../constants/action.const";

interface action {
  type: string;
  payload: { beers: any[]; type: string };
}
export interface IBeerState {
  [key:string]: any;
  beers: any[];
  beersWithPizza: any[];
  beersWithSteak: any[];
}
const initialState: IBeerState = {
  beers: [],
  beersWithPizza: [],
  beersWithSteak: [],
  pageNumber: 1
};

const beerReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case ADD_BEERS:
      state[action.payload.type].push(...action.payload.beers);
      return state;
    default:
      return state;
  }
};

export default beerReducer;
