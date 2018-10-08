import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function Chart(props) {
  return (
    <div>
      <Sparklines height={80} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}
