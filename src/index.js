import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/header/app.component";
import styles  from "./component/header/app.component.css";
import Main  from "./component/main/main";
import Footer  from "./component/footer/footer";

ReactDOM.render(
  <div className={styles.wrapper}> 
    <Header />
    <Main />
    <Footer />
    
  </div>,
  document.querySelector("#root")
);
