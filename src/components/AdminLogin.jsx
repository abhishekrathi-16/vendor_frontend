import React, { useState } from "react";
import useAdminStore from "../store/adminStore";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { loginAdmin, isAuthenticated } = useAdminStore();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginAdmin(credentials);
  };

  if (isAuthenticated) {
    navigate("/admin/dashboard");
  }

  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
