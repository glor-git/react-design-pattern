import React, { useContext } from 'react';
import { MyContext } from "./index";

function Pdp() {
  const value = useContext(MyContext);

  return (
    <div>{value}</div>
  );
}

export default Pdp;