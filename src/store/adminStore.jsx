import { create } from "zustand";
import axios from "axios";

const adminAPI = axios.create({
  baseURL: "http://localhost:8000/api",
  // baseURL: "https://wendor-backend-sigma.vercel.app/api",
  withCredentials: true,
});

const useAdminStore = create((set) => ({
  inventory: [],
  isAuthenticated: false,
  fetchInventory: async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/shopper/inventory"
        // "https://wendor-backend-sigma.vercel.app/api/shopper/inventory"
      );
      set({ inventory: response.data.items });
    } catch (error) {
      console.error("Failed to fetch inventory:", error);
    }
  },
  loginAdmin: async (credentials) => {
    try {
      const res = await adminAPI.post("/auth/login", credentials);
      console.log(res);
      if (res.data.user.role !== "admin") {
        set({ isAuthenticated: false });
        alert("Login failed. You are not an admin.");
      }
      else set({ isAuthenticated: true });
    } catch (error) {
      console.error("Failed to log in:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  },
  bulkCreateItems: async (items) => {
    try {
      const response = await adminAPI.post("/admin", items);
      // console.log(response);
      useAdminStore.getState().fetchInventory();
      alert("Items created successfully!");
    } catch (error) {
      console.error("Failed to create items:", error);
      alert("Failed to create items. Please try again.");
    }
  },
  updateItem: async (itemId, updatedData) => {
    try {
      const response = await adminAPI.patch(`/admin/${itemId}`, updatedData);
      console.log(response);
      useAdminStore.getState().fetchInventory();
      alert("Item updated successfully!");
    } catch (error) {
      console.error("Failed to update item:", error);
      alert("Failed to update item. Please try again.");
    }
  },
  logout: async () => {
    try {
      await adminAPI.get("/auth/logout");
      set({ isAuthenticated: false });
    } catch (err) {
      console.error("Failed to logout", err);
    }
  },
}));

export default useAdminStore;
