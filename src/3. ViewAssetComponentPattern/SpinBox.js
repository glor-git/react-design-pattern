import React, { useState } from 'react';
import SpinBoxView from "./SpinBoxView";

export default function SpinBox() {
  const [value, setValue] = useState(0);

  const props = {
    value,
    onDecrease: () => setValue(value - 1),
    onIncrease: () => setValue(value + 1),
  };

  return <SpinBoxView {...props} />;
};