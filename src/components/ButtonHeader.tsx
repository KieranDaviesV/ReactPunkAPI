import React from "react";
import { ButtonGroup, Button } from "reactstrap";

import "../css/buttonheader.css";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../actions";

const ButtonHeader = () => {
  const tab = useSelector((state: any) => state.tabs);
  const dispatch = useDispatch();
  return (
    <div className="buttonheader">
      <ButtonGroup style={{ width: "100%" }}>
        <Button
          active={tab === 0 ? true : false}
          onClick={() => dispatch(changeTab(0))}
        >
          ALL
        </Button>
        <Button
          active={tab === 1 ? true : false}
          onClick={() => dispatch(changeTab(1))}
        >
          PIZZA
        </Button>
        <Button
          active={tab === 2 ? true : false}
          onClick={() => dispatch(changeTab(2))}
        >
          STEAK
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonHeader;
