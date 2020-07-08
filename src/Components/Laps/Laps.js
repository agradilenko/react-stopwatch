import React from "react";
import Lap from "../Lap/Lap";

export default function Laps(props) {
  const { laps } = props;

  return (
    <ul className="laps">
      {laps.map((l, i) => (
        <Lap i={i} {...l} key={i} />
      ))}
    </ul>
  );
}
