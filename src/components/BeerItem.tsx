import React from "react";
import "../css/beerview.css";
import { useDispatch } from "react-redux";
import { beerSelected } from "../actions";

interface IBeerItemProps {
  id: string;
  name: string;
  imgURL: string;
  tagline: string;
  abv: number;
  description: string;
  foodPair: string[];
}
const BeerItem = (beerObject: IBeerItemProps) => {
  const dispatch = useDispatch();
  return (
    <div
      key={beerObject.name + beerObject.id}
      className="beerview"
      onClick={() => dispatch(beerSelected(beerObject, true))}
    >
      <img src={beerObject.imgURL} alt={beerObject.name} key={beerObject.id} />
      <p>
        {beerObject.name} : {beerObject.abv}%
      </p>
    </div>
  );
};

export default BeerItem;
