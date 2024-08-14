import React, { useState } from 'react';
import useAdminStore from '../store/adminStore';

const BulkCreateForm = () => {
  const { bulkCreateItems } = useAdminStore();
  const [items, setItems] = useState([
    { name: '', price: 0, available_units: 0, display_image_url: '' },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, { name: '', price: 0, available_units: 0, display_image_url: '' }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({items: items});
    await bulkCreateItems({ items: items });
    setItems([{ name: '', price: 0, available_units: 0, display_image_url: '' }]);
  };

  return (
    <div style={{padding:"0px 20px"}}>
      <h2 style={{margin:"10px"}}>Bulk Create Items</h2>
      <form onSubmit={handleSubmit} className='bulk-create-form'>
        {items.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px' }} className='bulk-create-items'>
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={item.name}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              min={0}
              value={item.price}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            <input
              type="number"
              name="available_units"
              min={0}
              placeholder="Available Units"
              value={item.available_units}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            <input
              type="text"
              name="display_image_url"
              placeholder="Image URL"
              value={item.display_image_url}
              onChange={(e) => handleInputChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveItem(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>
          Add Another Item
        </button>
        <button type="submit">Create Items</button>
      </form>
    </div>
  );
};

export default BulkCreateForm;
