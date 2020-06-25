import React from 'react';

export default function BtnDisplayComponent(props){
  return(
    <div>
      {(props.status === 0) ?
        <div>
          <button className = "stopwatch-btn stopwatch-btn-gre" onClick = {props.start} >Start</button>
          <button className = "stopwatch-btn stopwatch-btn-blue" onClick = {props.showCounter} >Show/Hide</button>
        </div>
        : ""}
      {(props.status === 1) ?  
      <div>
        <button className = "stopwatch-btn stopwatch-btn-red" onClick = {props.stop} >Stop</button>
        <button className = "stopwatch-btn stopwatch-btn-purp" onClick = {props.addLap} >Laps</button>
        <button className = "stopwatch-btn stopwatch-btn-yel" onClick = {props.reset} >Reset</button>
        <button className = "stopwatch-btn stopwatch-btn-blue" onClick = {props.showCounter} >Show/Hide</button>

      </div>
      : ""}

      {(props.status === 2) ?  
      <div>
        <button className = "stopwatch-btn stopwatch-btn-gre" onClick = {props.resume} >Resume</button>
        <button className = "stopwatch-btn stopwatch-btn-yel" onClick = {props.reset} >Reset</button>
        <button className = "stopwatch-btn stopwatch-btn-blue" onClick = {props.showCounter} >Show/Hide</button>
      </div>
      : ""}
      {(props.status === 3) ?
        <div>
          <button className = "stopwatch-btn stopwatch-btn-blue" onClick = {props.showCounter} >Show/Hide</button>
        </div>
        : ""}
    </div>
  )
}