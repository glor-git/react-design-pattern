import React from 'react';

export default function AtomicDesignPattern(props) {
  return (
    <>
      <Templates />
      <Oraganisms />
    </>
  );
}

function Templates() {
  return (
    <>
      Layout
    </>
  )
}

function Oraganisms() {
  return (
    <>
      Oraganisms
      <Molecules />
      <Atom3 />
    </>
  )
}

function Molecules() {
  return (
    <>
      Molecules
      <Atom1 />
      <Atom2 />
    </>
  )
}

function Atom1() {
  return (
    <>Atom1</>
  )
}

function Atom2() {
  return (
    <>Atom2</>
  )
}

function Atom3() {
  return (
    <>Atom3</>
  )
}