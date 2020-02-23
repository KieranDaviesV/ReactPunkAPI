import {
  GET_BEER,
  ADD_BEERS,
  UPDATE_PAGE_NUMBER,
  BEER_SELECTED,
  CHANGE_TAB,
  OPEN_CART,
  ADD_TO_CART,
  UPDATE_QUANTITY,
  UPDATE_SORT
} from "../constants/action.const";
import IBeer from "../interfaces/IBeer.interface";

export const getBeers = () => {
  return {
    type: GET_BEER
  };
};

export const addBeers = (beers: any[], beerList: string) => {
  return {
    type: ADD_BEERS,
    payload: { beers, type: beerList }
  };
};

export const updatePageNumber = (newPageNumber: number) => {
  return {
    type: UPDATE_PAGE_NUMBER,
    payload: newPageNumber
  };
};

export const beerSelected = (beerPayload: any, modalSelection: boolean) => {
  return {
    type: BEER_SELECTED,
    payload: {
      beer: beerPayload,
      setBool: modalSelection
    }
  };
};
export const changeTab = (tabNumber: number) => {
  return {
    type: CHANGE_TAB,
    payload: tabNumber
  };
};
export const openCloseCart = (isOpen: boolean) => {
  return {
    type: OPEN_CART,
    payload: isOpen
  };
};
export const addToCart = (beer: IBeer | {}) => {
  return {
    type: ADD_TO_CART,
    payload: beer
  };
};
export const updateQuantity = (beerId: string, quantity: number) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { beerId, quantity }
  };
};

export const changeSort = (sortType: string, isAscending: boolean) => {
  return {
    type: UPDATE_SORT,
    payload: { sortType, isAscending }
  };
};
