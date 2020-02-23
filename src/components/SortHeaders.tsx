import React from "react";
import { ButtonGroup, Button } from "reactstrap";

import "../css/buttonheader.css";
import { useSelector, useDispatch } from "react-redux";
import { changeSort } from "../actions";
import { IAppState } from "../stores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

const SortHeaders = () => {
  const sortType = useSelector((state: IAppState) => state.sort.sortType);
  const dispatch = useDispatch();
  return (
    <div className="buttonheader">
      <ButtonGroup style={{ width: "100%" }}>
        <Button
          active={sortType === "none" ? true : false}
          onClick={() => dispatch(changeSort("none", true))}
        >
          No filter
        </Button>
        <Button onClick={() => dispatch(changeSort("name", true))}>
          NAME <FontAwesomeIcon icon={faSortUp} />
        </Button>
        <Button onClick={() => dispatch(changeSort("name", false))}>
          NAME  <FontAwesomeIcon icon={faSortDown} />
        </Button>
        <Button onClick={() => dispatch(changeSort("abv", false))}>
          ABV  <FontAwesomeIcon icon={faSortUp} />
        </Button>
        <Button onClick={() => dispatch(changeSort("abv", true))}>
          ABV  <FontAwesomeIcon icon={faSortDown} />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default SortHeaders;
