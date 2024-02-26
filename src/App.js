
import './App.css';


import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
      {/* <Navigation/> */}
       <div>
         {/* <HomePage/> */}
         {/* <Product/> */}
         {/* <ProductDetails/> */}
         {/* <Cart/> */}
         {/* <Checkout/> */}
         {/* <Order/> */}
         {/* <OrderDetails/> */}
       </div>
       {/* <Footer/> */}
    </div>
  );
}

export default App;
