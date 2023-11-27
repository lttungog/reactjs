import React from "react";
import "./App.css";

function ClickMe() {
    const onUserClick = () => console.log("Clicked👆");
  
    return <button onClick={onUserClick}>Click Me!</button>
  }
  
  export default ClickMe;