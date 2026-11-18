
import { Routes,Route } from 'react-router';
import{useState ,useEffect} from 'react' ;
import axios from 'axios';
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';


function App() {
   const [cart , setCart ] =useState([]);

   const loadCart = async ()=>{
     const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
     };

   useEffect(()=>{  loadCart(); }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart ={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart}/>}></Route>
    </Routes>
  )
}

export default App
