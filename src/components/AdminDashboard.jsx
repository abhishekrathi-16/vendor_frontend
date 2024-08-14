import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAdminStore from "../store/adminStore";
import BulkCreateForm from "./BulkCreateForm";
import UpdateItemForm from "./UpdateItemForm";

// TODO: fix styling for the admin dashboard
// TODO: push changes to github for backend and host it again on vercel
// TODO: add the new api in the frontend and then push changes for frontend
// TODO: update docs for backend using new API and update README for frontend with screenshots for the admin routes
// TODO: create final video and submit

const AdminDashboard = () => {
  const { inventory, fetchInventory, isAuthenticated, logout } =
    useAdminStore();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/admin"); // Navigate to the login page after logout
  };
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin");
    } else {
      fetchInventory();
    }
  }, [isAuthenticated, fetchInventory, navigate]);

  return isAuthenticated ? (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0px 20px",marginTop:"5px"}}>
        <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <BulkCreateForm />
      <UpdateItemForm />
      <h2 style={{ textAlign: "center", margin: "10px" }}>Inventory</h2>
      <table className="update-items">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Available Units</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.available_units}</td>
              <td>
                <img
                  className="update-item-image"
                  src={item.display_image_url}
                  alt={item.display_image_url}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default AdminDashboard;
