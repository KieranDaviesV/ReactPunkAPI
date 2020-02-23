import React, { useState } from "react";

interface ICollapseableStringProps {
  string: string;
  maxStringLength: number;
}

const CollapseableString = (props: ICollapseableStringProps) => {
  const [isCollapsed, setCollapsed] = useState(true);
  if (props.string === undefined) {
    return null;
  }
  console.log(props.maxStringLength);
  return props.string.length > props.maxStringLength ? (
    <p onClick={() => setCollapsed(!isCollapsed)}>
      {isCollapsed
        ? props.string.substring(0, props.maxStringLength) + "..."
        : props.string}
    </p>
  ) : (
    <p>{props.string}</p>
  );
};

export default CollapseableString;
