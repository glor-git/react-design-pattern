import React, { useEffect, useState } from 'react';
import { data } from "./data";
import Presenter from "./Presenter";

function Container() {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(data);
  }, [])

  return (
    <Presenter state={state} />
  );
}

export default Container;