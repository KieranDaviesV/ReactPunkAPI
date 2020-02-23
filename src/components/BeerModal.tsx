import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { beerSelected, addToCart } from "../actions";
import "../css/beermodal.css";
import { IAppState } from "../stores";
import CollapseableString from "./CollapseableString";

const BeerModal = () => {
  const beer: any = useSelector((state: IAppState) => state.modal.modalBeer);
  const isOpen = useSelector((state: IAppState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const toggle = () => dispatch(beerSelected({}, !isOpen));
  const addCart = () => {
    dispatch(addToCart(beer));
    toggle();
  };
  // console.log(beer.)
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <div className="beermodal">
        <ModalHeader toggle={toggle}>{beer.name}</ModalHeader>
        <ModalBody>
          <Container>
            <Row>
              <Col xs={9}>
                <p>Tagline: {beer.tagline}</p>
                <p>ABV: {beer.abv}%</p>
                <CollapseableString
                  string={"Description: " + beer.description}
                  maxStringLength={80}
                />
                {beer.foodPair ? (
                  <CollapseableString
                    string={"Pairs with: " + beer.foodPair.join(" , ")}
                    maxStringLength={50}
                  />
                ) : null}
              </Col>
              <Col xs={3}>
                <img src={beer.imgURL} alt={beer.name} />
              </Col>
            </Row>
            <Row>
              <Button
                style={{ float: "right" }}
                onClick={addCart}
                color="success"
              >
                Add To Cart
              </Button>
            </Row>
          </Container>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default BeerModal;
