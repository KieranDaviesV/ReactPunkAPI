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
      console.log(state.beers);
      return state;
    case UPDATE_PAGE_NUMBER:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
  //   if (action.type === ADD_BEERS) {
  //     //array of arrays for the pagination
  //     state.beers.push(action.payload);
  //   }
  //   return state;
};

export default beerReducer;
