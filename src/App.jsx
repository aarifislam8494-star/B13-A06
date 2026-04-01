import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import StatBar from './components/StatBar/StatBar'
import Cart from './components/Tools/Cart/Cart'
import ProductDesc from './components/Tools/Product/ProductDesc'
import Product from './components/Tools/Product/ProductDesc'
import Products from './components/Tools/Product/Products'
import Step from './components/Step/Step'
import Pricing from './components/Pricing/Pricing'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

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
      <Navbar carts={carts} />
      <Banner />
      <StatBar />
      <ProductDesc />

       <style>{`
         .tab:checked {
         background: linear-gradient(to right, #4F39F6, #9514FA) !important;
         color: white !important;
       }
   `}
      </style>

      <div className="tabs tabs-box justify-center bg-white mb-10">
         <div className='border px-2 py-1 border-[#f2f2f2] rounded-full'>
          <input type="radio"
            name="my_tabs_1"
            className="tab rounded-full font-semibold"
            aria-label="Products"
            onClick={() => isSelected("Products")}
            defaultChecked
          />
          <input type="radio"
            name="my_tabs_1"
            className="tab rounded-full font-semibold"
            aria-label={`Cart(${carts.length})`}
            onClick={() => isSelected("Cart")}
          />
        </div>
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

      <Step />
      <Pricing />
      <CTASection />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App