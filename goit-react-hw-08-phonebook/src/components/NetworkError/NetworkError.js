import { React } from "react";
import networkErrorStyles from "./networkError.module.css";

export default function NetworkError() {
  return (
    <div className={networkErrorStyles.wrapper}>
      <span className={networkErrorStyles.errorDescr}>
        Something went wrong
      </span>
    </div>
  );
}
