import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBeers } from "../actions";
import { Col, Row, Container } from "reactstrap";
import BeerItem from "./BeerItem";
import { IAppState } from "../stores";
import utils from "../services/utils";

interface IBeerDisplayProps {
  tabId: number;
  beerType: string;
  getBeerFunction: (pageNumber: number) => Promise<any[]>;
}

const BeerDisplay = (props: IBeerDisplayProps) => {
  const beers = useSelector((state: IAppState) => state.beer[props.beerType]);
  const sortType = useSelector((state: IAppState) => state.sort.sortType);
  const asc = useSelector((state: IAppState) => state.sort.ascending);
  const tab = useSelector((state: IAppState) => state.tabs);

  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //takes the prop function to fire off the data for the component
  const getBeers = () => {
    return (dispatch: any) => {
      setIsLoading(true);
      props.getBeerFunction(pageNumber).then((results: any) => {
        dispatch(addBeers(results, props.beerType));
        setIsLoading(false);
      });
    };
  };
  //adds event handler for scrolling to page
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  //triggers off the page scroll / page number increasing
  useEffect(() => {
    dispatch(getBeers());
 // eslint-disable-next-line
  }, [pageNumber]);
  //resets to top of the page when switching tabs
  useEffect(() => {
    if (props.tabId === tab) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
     // eslint-disable-next-line
  }, [tab]);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    if (tab !== props.tabId) {
      return;
    }
    setPageNumber(pageNumber + 1);
  };
  const displayBeers = (passThroughBeer: any[]) => {
    let beers = passThroughBeer;
    if (beers.length === 0) {
      return <p>No Beers to render</p>;
    }
    if (sortType !== "none") {
      beers = utils.sortArrayWithObject(beers, sortType);
    }
    if(!asc){
      beers.reverse();
    }
    const size = 3;
    //maps through and creates rows of 3
    //at the end of each 3 it will put the rowcontent into a row component
    //then start again
    return beers
      .map((beers: any, index: number) => {
        return (
          <Col id={"beerview" + index}>
            <BeerItem
              key={beers.id}
              id={beers.id}
              name={beers.name}
              imgURL={beers.image_url}
              abv={beers.abv}
              tagline={beers.tagline}
              description={beers.description}
              foodPair={beers.food_pairing}
            />
          </Col>
        );
      })
      .reduce((r: any[], element: any, index: number) => {
        index % size === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
      }, [])
      .map((rowContent: any, index: number) => {
        return <Row key={"beerviewrow" + index}>{rowContent}</Row>;
      });
  };
  return (
    <div className="beerdisplay">
      <Container>
        {isLoading && beers.length === 0 ? "loading..." : displayBeers(beers)}
      </Container>
    </div>
  );
};

export default BeerDisplay;
