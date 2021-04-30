import React from "react";
import ReactDom from "react-dom";
import Pomodoro from "./components/pomodoro";

ReactDom.render(
    <Pomodoro />,
    document.querySelector("#root")
)