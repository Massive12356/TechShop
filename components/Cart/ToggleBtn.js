import React from "react";
import { ToggleCover } from "./styles";

export default function ToggleBtn({ small, amount, increment, decrement }) {
  return (
    <ToggleCover small={small}>
      <p className="btn" onClick={() => decrement()}>
        -
      </p>
      <span>{amount}</span>
      <p className="btn" onClick={() => increment()}>
        +
      </p>
    </ToggleCover>
  );
}
