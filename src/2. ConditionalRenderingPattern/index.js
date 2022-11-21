import React from 'react';
import CRP1 from "./CRP1";
import CRP2 from "./CRP2";
import CRP3 from "./CRP3";
import crp4 from "./CRP4";

const CRP4 = crp4(CRP1);

function Index() {
  return (
    <>
      <CRP1 />
      <CRP2 />
      <CRP3 />
      <CRP4 isLogin={true} />
      <CRP4 isLogin={false} />
    </>
  );
}

export default Index;