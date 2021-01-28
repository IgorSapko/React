import React from "react";
import { logOut } from "../../redux/actions/authActions";
import { connect, useSelector } from "react-redux";

function UserMenu({ logOut }) {
  const email = useSelector((state) => state.auth.email);
  const userLocalId = useSelector((state) => state.auth.localId);
   return (
    <>
      <h2>UserMenu</h2>
      <p>User Email:</p>
      <p>{email}</p>

      <p>{userLocalId}</p>
      <button type="button" onClick={() => logOut()}>
        LogOut
      </button>
    </>
  );
}

const mapDispatchToProps = { logOut };

export default connect(null, mapDispatchToProps)(UserMenu);
