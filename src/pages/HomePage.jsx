import React, { useState } from 'react'
import ItemList from '../components/ItemList'
import Cart from '../components/Cart'

const HomePage = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  return (
    <div className='home-page'>
        <ItemList/>
        <button onClick={openCart}>Open Cart</button>
        <Cart isOpen={isCartOpen} closeModal={closeCart}/>
    </div>
  )
}

export default HomePage