import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [theme, setTheme] = useState(false);
  // TODO: Implement state for cart management
  const [cart,setCart]=useState([]);
  // TODO: Implement state for category filtering
  const [category, setCategory] = useState("all");
  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle theme={theme} setTheme={setTheme}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} setCart={setCart}/>
      {/* TODO: Implement and render Cart component */}
      <Cart items={cart}/>
    </div>
  )
}

export default App