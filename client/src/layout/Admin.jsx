import { useState } from "react";
import { Outlet } from "react-router-dom";
import { adminLogin } from "../api/data";

export const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    const response = await adminLogin(data);

    setIsAdmin(response.loggedIn);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>
          <input type="text" name="user_name" />
        </label>
        <label>
          <input type="password" name="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};
