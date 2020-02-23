import React, { useEffect, useState } from "react";
import "../css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../stores";
import { openCloseCart } from "../actions";
import CartItem from "./CartItem";
import { Container, Row, Col, Button } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: IAppState) => state.cart.isCartOpen);
  const cartItems = useSelector((state: IAppState) => state.cart.cart);
  const totalPrice = useSelector((state: IAppState) => state.cart.totalCost);
  const [isEmpty, setEmpty] = useState(true);
  
  const displayCartItems = () => {
    return Object.keys(cartItems).map(key => {
      const item = cartItems[key];
      return (
        <CartItem
          id={item.id}
          quantity={item.quantity}
          name={item.name}
          imgURL={item.imgURL}
        />
      );
    });
  };
  useEffect(() => {
    const lengthCart = Object.keys(cartItems).length;
    // console.log({lengthCart});
    setEmpty(lengthCart > 0 ? false : true);
  }, [cartItems]);
  const clickedWhileClosed = () => {
    if (isOpen) {
      return;
    }
    dispatch(openCloseCart(true));
  };
  return (
    <div className="cart" onClick={() => clickedWhileClosed()}>
      <p onClick={() => dispatch(openCloseCart(!isOpen))}>
        {isOpen ? "Press to Close Cart" : "Press to Open Cart"}
      </p>
      {isOpen ? (
        isEmpty ? (
          <p>Cart is currently empty</p>
        ) : (
          <Container>
            <div className="cartItemList">
              <ReactCSSTransitionGroup
                transitionName="cartItem"
                transitionEnterTimeout={10000}
                transitionLeaveTimeout={10000}
              >
                {displayCartItems()}
              </ReactCSSTransitionGroup>
            </div>
            <div>
              <Row>
                <Col>
                  <p>{"Total Cost: £" + totalPrice}</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "5px" }}>
                <Col>
                  <Button
                    size={"lg"}
                    color="success"
                    style={{ padding: "2px" }}
                  >
                    Complete Order
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        )
      ) : null}
    </div>
  );
};

export default Cart;
