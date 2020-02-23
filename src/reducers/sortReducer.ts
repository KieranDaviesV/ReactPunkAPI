import { UPDATE_SORT } from "../constants/action.const";

export interface ISortState {
  ascending: boolean;
  sortType: "name" | "abv" | "none";
}

const initalState: ISortState = {
  ascending: true,
  sortType: "none"
};

const sortReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case UPDATE_SORT:
      const obj = {
        ascending: action.payload.isAscending,
        sortType: action.payload.sortType
      };
      return {
        ...obj
      };
    default:
      return state;
  }
};
export default sortReducer;
