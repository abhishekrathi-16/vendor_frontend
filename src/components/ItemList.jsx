import React, { useEffect } from "react";
import useInventoryStore from "../store/inventoryStore";
import ItemCard from "./ItemCard";

const ItemList = () => {
  const inventory = useInventoryStore((state) => state.inventory);
  const fetchInventory = useInventoryStore((state) => state.fetchInventory);
  const connectWebSocket = useInventoryStore((state) => state.connectWebSocket);

  useEffect(() => {
    fetchInventory();
    connectWebSocket();
    // console.log(inventory);
  }, [fetchInventory, connectWebSocket]);

  return (
    <div className="item-list">
      {inventory.map((item) => {
        return <ItemCard key={item._id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
