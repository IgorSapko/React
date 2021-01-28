import React from "react";
import { useSelector } from "react-redux";
import UserMenu from "../../components/UserMenu/UserMenu";

export default function HomePage() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? <UserMenu /> : <h2>HOMEPAGE</h2>;
}
