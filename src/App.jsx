import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import StatBar from './components/StatBar/StatBar'
import Cart from './components/Tools/Cart/Cart'
import ProductDesc from './components/Tools/Product/ProductDesc'
import Product from './components/Tools/Product/ProductDesc'
import Products from './components/Tools/Product/Products'

const getProducts = async () => {
  const res = await fetch("/Products.json");
  return res.json();
}
const productsPromise = getProducts();


function App() {
  const [selected, isSelected] = useState("Products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar />
      <Banner />
      <StatBar />
      <ProductDesc />

      <div className="tabs tabs-box justify-center bg-white mb-10">
        <input type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Products"
          onClick={() => isSelected("Products")}
          defaultChecked
        />
        <input type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Cart"
          onClick={() => isSelected("Cart")}
        />
      </div>

      {selected === "Products"
        && <Products productsPromise={productsPromise}
          carts={carts}
          setCarts={setCarts}
        />}
      {selected === "Cart" && <Cart
        carts={carts}
        setCarts={setCarts}
      />}
    </>
  )
}

export default App