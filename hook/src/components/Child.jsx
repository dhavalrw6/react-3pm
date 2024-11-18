import React, { memo, useState } from "react";

function Child() {
  console.log("Child component render..");
  return (
    <div>
      <h2>Child component.</h2>
    </div>
  );
}

export default memo(Child);
