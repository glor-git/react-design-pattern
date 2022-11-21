import React from 'react';

export default function CRP1(props) {
  let isLogin = true; // or false

  if (isLogin) {
    return (
      <div>Logout</div>
    );
  } else {
    return (
      <div>Login</div>
    );
  }

}

