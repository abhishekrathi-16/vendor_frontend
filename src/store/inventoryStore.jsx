import { create } from "zustand";
import axios from "axios";
import Ably from "ably";

const useInventoryStore = create((set) => ({
  inventory: [],
  cart: [],
  fetchInventory: async () => {
    const response = await axios.get(
      "http://localhost:8000/api/shopper/inventory"
      // "https://wendor-backend-sigma.vercel.app/api/shopper/inventory"
    );
    // console.log(response.data.items);
    set({ inventory: response.data.items });
  },
  connectWebSocket: () => {
    // const ws = new WebSocket("ws://localhost:8080");
    // ws.onmessage = (event) => {
    //     if (event.data === 'Inventory updated') {
    //       useInventoryStore.getState().fetchInventory();
    //     }
    // };
    const ably = new Ably.Realtime(
      "oIzOJg.mRFTmg:iqYsKUyO3m_un_1UZXxoGdoxKQif3ZCqeFr56esZP2A"
    );
    const channel = ably.channels.get("inventory-updates");

    channel.subscribe("update", () => {
      console.log("Inventory update received");
      useInventoryStore.getState().fetchInventory(); // Fetch updated inventory data
    });

    return () => {
      channel.unsubscribe(); // Clean up subscription on component unmount
      ably.close(); // Close the connection when the component unmounts
    };
  },
  addToCart: (item, quantity) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: quantity }
              : cartItem
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, quantity }] };
      }
    }),
  removeFromCart: (itemName) => set((state)=>({
    cart: state.cart.filter((cartItem) => cartItem.name !== itemName)
  })),
  clearCart: () => set({ cart: [] }),
}));

export default useInventoryStore;
