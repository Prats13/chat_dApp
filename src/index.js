import React from "react";
import ReactDom from "react-dom";
import { App } from "../src/App.jsx";

ReactDom.render( 
    <div style={{overflowX:"hidden"}}>
        <App /> 
    </div>,
    document.getElementById('root')
);