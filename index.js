require('dotenv').config();
import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import './src/styles/index.scss'

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);