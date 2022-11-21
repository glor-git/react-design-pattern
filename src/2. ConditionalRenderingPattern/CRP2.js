import React from 'react';

export default function CRP2(props) {
  let isLogin = true; // or false

  return (
    <>
      {isLogin ? <div>Logout</div> : <div>Login</div>}
    </>
  );
}

