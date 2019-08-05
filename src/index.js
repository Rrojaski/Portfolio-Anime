import React from "react";
import ReactDOM from "react-dom";
import Header from './layout/Header/Header';
import 'reset.css';
import "./styles.css";
import Content from './layout/Content/Content';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
