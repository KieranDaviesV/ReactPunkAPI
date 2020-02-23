import React from "react";
import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../actions";
import CollapseableString from "./CollapseableString";
interface ICartItemProps {
  id: string;
  name: string;
  imgURL: string;
  quantity: number;
}

const CartItem = (props: ICartItemProps) => {
  const dispatcher = useDispatch();
  return (
    <Row key={props.id} className="cartItem">
      <Col xs={2}>
        <img src={props.imgURL} alt={props.name} />
      </Col>
      <Col xs={3}>
        <CollapseableString string={props.name} maxStringLength={15} />
        {/* <p>{props.name}</p> */}
      </Col>
      <Col xs={4}>
        <Button
          size={"sm"}
          outline color="danger"
          onClick={() =>
            dispatcher(updateQuantity(props.id, props.quantity - 1))
          }
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </Button>
        <span style={{padding: "5px"}}>{props.quantity}</span>
        <Button
          size={"sm"}
          outline color="success"
          onClick={() =>
            dispatcher(updateQuantity(props.id, props.quantity + 1))
          }
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </Button>
      </Col>
      <Col>
        <Button
          size={"sm"}
          outline color="danger"
          onClick={() => dispatcher(updateQuantity(props.id, 0))}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;
