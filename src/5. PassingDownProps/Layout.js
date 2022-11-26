import React from "react";
import Details from "./Details";

export default function Layout ({ title, ...props }) {
  return (
    <div>
      <h1>{title}</h1>
      <Details {...props} />
    </div>
  )
}