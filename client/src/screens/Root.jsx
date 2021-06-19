import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScreensHome from './Home';
import ScreensProduct from './Product/Product';
import ScreensCart from './Cart';
import ScreensLogin from './Login';
import ScreensRegister from './Register';
import ScreensShopList from './Shop/List';
import ScreensShopMyList from './Shop/MyList';
import ScreensProfile from './Profile/Profile';
import ScreensProfileEdit from './Profile/Edit';
import ScreensShop from './Shop/Shop';
import ScreensShopEdit from './Shop/Edit';
import ScreensShopCreate from './Shop/Create';
import ScreensProductCreate from './Product/Create';
import ScreensProductEdit from './Product/Edit';
import Sidebar from '../components/Sidebar';
import PrivateRoute from '../components/PrivateRoute';
import ScreensNotFound from './NotFound';

const ScreensRoot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-light-lightest">
      {/*  Sidebar  */}
      <Sidebar closeSidebar={() => setIsOpen(false)} isOpen={isOpen} />

      <main className="min-h-screen flex flex-col">
        {/* Header */}
        <Header openSidebar={() => setIsOpen(true)} />

        {/* Main */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<ScreensHome />} />
            <Route path="/shops/all" element={<ScreensShopList />} />
            <Route path="/shops/:shopId" element={<ScreensShop />} />
            <Route path="/cart" element={<ScreensCart />} />
            <Route path="/product/:productId" element={<ScreensProduct />} />

            <Route path="/login" element={<ScreensLogin />} />
            <Route path="/register" element={<ScreensRegister />} />

            <PrivateRoute path="/profile/me" component={ScreensProfile} />
            <PrivateRoute
              path="/profile/me/edit"
              component={ScreensProfileEdit}
            />

            <PrivateRoute
              path="/seller/:shopId/product/create"
              component={ScreensProductCreate}
            />
            <PrivateRoute
              path="/seller/:shopId/:productId/edit"
              component={ScreensProductEdit}
            />

            <PrivateRoute path="/seller/shops" component={ScreensShopMyList} />
            <PrivateRoute
              path="/seller/shop/create"
              component={ScreensShopCreate}
            />
            <PrivateRoute
              path="/seller/shop/:shopId/edit"
              component={ScreensShopEdit}
            />

            <Route path="*" element={<ScreensNotFound />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default ScreensRoot;
