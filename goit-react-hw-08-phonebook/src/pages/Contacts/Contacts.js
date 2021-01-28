import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ContactsApp from "../../components/ContactsApp/ContactsApp";

export default function Contacts({ history }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    if (!isAuth) {
      history.replace("/register");
    }
  });

  return <ContactsApp />;
}
