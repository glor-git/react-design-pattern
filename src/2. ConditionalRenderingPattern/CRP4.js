import React from 'react';

export default function crp4(Component) {
  return function withConditionComponent({ isLogin }) {
    return (
      <>
        {isLogin && <Component />}
      </>
    );
  }
}