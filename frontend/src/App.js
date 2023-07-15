import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, SignupPage, HomePage, ActivationPage, ProductsPage, BestSellingPage, EventsPage,
 FAQPage, ProdutDetailPage, ProfilePage, CheckoutPage, ShopCreatePage, SellerActivationPage, ShopLoginPage,
 

} from './routes/Routes';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Store from './redux/store';
import { loadSeller, loadUser } from './redux/actions/user';
import ProtectedRoute from './routes/ProtectedRoute';
import { ShopHomePage,ShopDashboardPage } from "./routes/ShopRoutes.js";
import SellerProtectedRoute from './routes/SellerProtectedRoute';

const App = () => {

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, [])


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/activation/:activation_token' element={<ActivationPage />} />
          <Route path='/seller/activation/:activation_token' element={<SellerActivationPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:name' element={<ProdutDetailPage />} />
          <Route path='/best-selling' element={<BestSellingPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/checkout' element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          } />
          <Route path='/profile' element={
            <ProtectedRoute >
              <ProfilePage />
            </ProtectedRoute>
          } />

          {/* Shop Routes */}
          <Route path='/shop-create' element={<ShopCreatePage />} />
          <Route path='/shop-login' element={<ShopLoginPage />} />
          <Route path='/shop/:id' element={
            <SellerProtectedRoute >
              <ShopHomePage />
            </SellerProtectedRoute>
          } />

          <Route path='/dashboard' element={
            <SellerProtectedRoute >
              <ShopDashboardPage />
            </SellerProtectedRoute>
          } />

        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>

    </>
  )
}

export default App