import React from "react";

export default function Lap({ i, h, m, s, ms }) {
  return (
    <li className="laps__item">
      {i}
      {` ${h >= 10 ? h : "0" + h}
        :${m >= 10 ? m : "0" + m}
        :${s >= 10 ? s : "0" + s}
        :${ms >= 10 ? ms : "0" + ms}`}
    </li>
  );
}
