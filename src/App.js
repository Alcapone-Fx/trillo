import React from "react";

import Content from "./layout/content/Content";
import Header from './layout/header/Header'
import "./assets/sass/main.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
