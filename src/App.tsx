import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import punkAPI from "./services/punkAPI";
import { changeTab } from "./actions";
import BeerModal from "./components/BeerModal";
import BeerDisplay from "./components/BeerDisplay";
import SwipeableViews from "react-swipeable-views";
import Headers from "./components/Headers";
import Cart from "./components/Cart";
import { IAppState } from "./stores";

function App() {
  const dispatch = useDispatch();
  const tab = useSelector((state: IAppState) => state.tabs);

  const onSwipe = (index: number) => dispatch(changeTab(index));

  return (
    <div className="App">
      <Headers />
      <SwipeableViews index={tab} enableMouseEvents onChangeIndex={onSwipe}>
        <div key={1} className="marginTop">
          <BeerDisplay
            key={1}
            tabId={0}
            beerType="beers"
            getBeerFunction={punkAPI.getBeerByPage}
          />
        </div>
        <div key={2} className="marginTop">
          <BeerDisplay
            key={2}
            tabId={1}
            beerType="beersWithPizza"
            getBeerFunction={punkAPI.getBeerWithPizzaByPage}
          />
        </div>
        <div key={3} className="marginTop">
          <BeerDisplay
            key={3}
            tabId={2}
            beerType="beersWithSteak"
            getBeerFunction={punkAPI.getBeerWithSteakByPage}
          />
        </div>
      </SwipeableViews>
      <BeerModal />
      <Cart />
    </div>
  );
}

export default App;
