import React, { useState } from 'react';
import useAdminStore from '../store/adminStore';

const UpdateItemForm = () => {
  const { inventory, updateItem } = useAdminStore();
  const [selectedItem, setSelectedItem] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: '',
    price: 0,
    available_units: 0,
    display_image_url: '',
  });

  const handleSelectChange = (event) => {
    const itemId = event.target.value;
    const item = inventory.find((item) => item._id === itemId);
    setSelectedItem(item);
    setUpdatedData({
      name: item.name,
      price: item.price,
      available_units: item.available_units,
      display_image_url: item.display_image_url,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateItem(selectedItem._id, updatedData);
    setSelectedItem(null);
    setUpdatedData({
      name: '',
      price: 0,
      available_units: 0,
      display_image_url: '',
    });
  };

  return (
    <div style={{padding:"0px 20px"}}>
      <h2 style={{margin:"20px 10px"}}>Update Item</h2>
      <form className='update-item-form' onSubmit={handleSubmit}>
        <select style={{margin:"10px",marginTop:"0px"}} onChange={handleSelectChange} value={selectedItem?._id || ''}>
          <option value="" disabled>
            Select an item to update
          </option>
          {inventory.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>

        {selectedItem && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={updatedData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={updatedData.price}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="available_units"
              placeholder="Available Units"
              value={updatedData.available_units}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="display_image_url"
              placeholder="Image URL"
              value={updatedData.display_image_url}
              onChange={handleInputChange}
            />
            <button type="submit">Update Item</button>
          </>
        )}
      </form>
    </div>
  );
};

export default UpdateItemForm;
