import React from "react"
import ReactDOM from "react-dom"
import { PageBuilder } from "./pages"
import "../src/common/styles/global.scss"



ReactDOM.render(
  <React.StrictMode>
    <PageBuilder />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
