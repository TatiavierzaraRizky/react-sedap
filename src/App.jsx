import { Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React from 'react';
import "./assets/tailwind.css";
import Loading from './components/Loading';
import GuestLayout from './layouts/GuestLayout';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import CheckStock from './guest/components/CheckStock';
import About from './pages/guest/AboutUs';
// import Menu from './pages/guest/Menu';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import Error400 from './pages/Error400';
import Error401 from './pages/Error401';
import Error403 from './pages/Error403';
import Login from './pages/auth/Login';
import Forgot from './pages/auth/Forgot';
import Register from './pages/auth/Register';
import GuestHome from './pages/GuestHome';
import HeroSection from './guest/components/HeroSection';
import Products from './pages/Products';

// Lazy loading components
const Error400Lazy = React.lazy(() => import('./pages/Error400'));
const Error401Lazy = React.lazy(() => import('./pages/Error401'));
const Error403Lazy = React.lazy(() => import('./pages/Error403'));
const UsersLazy = React.lazy(() => import('./pages/Users'));
const AboutLazy = React.lazy(() => import('./pages/guest/AboutUs'));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Notes = React.lazy(() => import("./pages/Notes"));

// const MenuLazy = React.lazy(() => import('./pages/guest/Menu'));

function App() {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/error400" element={<Error400Lazy />} />
          <Route path="/error401" element={<Error401Lazy />} />
          <Route path="/error403" element={<Error403Lazy />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/notes" element={<Notes />} />
          {/* <Route path="/menu" element={<MenuLazy />} /> */}
        </Route>

        {/* Auth Layout Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Guest Layout Routes */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<AboutLazy />} />
          {/* <Route path="/guest/menu" element={<MenuLazy />} /> */}
          <Route path="/guest/check-stock" element={<CheckStock />} />
        </Route>

        {/* Fallback for NotFound */}
        <Route path="*" element={<NotFound />} />

        <Route path="/guest" element={<GuestLayout />}>
          <Route path="check-stock" element={<CheckStock />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

