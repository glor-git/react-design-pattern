import React from "react";

export default function Details ({ name, language }) {
  return (
    <div>
      <p>
        {name} works with {language}
      </p>
    </div>
  )
}