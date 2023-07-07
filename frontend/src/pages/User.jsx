import { React, useState } from "react";

import Login from "../components/Login";
import Register from "../components/Register";

const User = () => {
  const [form, setForm] = useState(true);

  function handleForm() {
    setForm(!form);
  }

  return form ? (
    <Login handleForm={handleForm} />
  ) : (
    <Register handleForm={handleForm} />
  );
};

export default User;
