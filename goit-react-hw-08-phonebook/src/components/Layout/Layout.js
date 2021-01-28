import React from "react";
import Appbar from "../Appbar/Appbar";
import bodyStyles from "styled-components";

const StylesForBodyChidWrapper = bodyStyles.div`
h2{
    font-size:24px
};
h3{
    font-size:18px
}
`;
export default function Layout({ children }) {
  return (
    <StylesForBodyChidWrapper>
      <Appbar />
      <hr />

      {children}
    </StylesForBodyChidWrapper>
  );
}
