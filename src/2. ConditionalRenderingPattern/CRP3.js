import React from 'react';

export default function CRP3(props) {
  let isLogin = true; // or false

  return (
    <>
      {isLogin && <div>Logout</div>}
      {!isLogin && <div>Login</div>}
    </>
  );
}

