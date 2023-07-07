import { React, useState } from "react";

import Login from "../Components/Login";
import Register from "../Components/Register";

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
