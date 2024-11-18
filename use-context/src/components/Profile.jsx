import React, { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <div>Not logged in</div>;

  return (
    <>
      <h2>welcome {user.username}</h2>
    </>
  );
}

export default Profile;
