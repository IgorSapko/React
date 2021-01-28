import React from "react";
import errorStyles from "./Error.module.css";
// import  "./error.css";
// import { CSSTransition } from "react-transition-group";

export default function Error() {
  console.log(errorStyles);
  return (
    // <CSSTransition in={true} classNames={errorStylesrun deploy} timeout={3000} >
      <div className={errorStyles.wrapper}>
        <span className={errorStyles.errorDescr}>
          Contact is already exists
        </span>
      </div>
    // </CSSTransition>
  );
}
