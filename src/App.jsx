import React, { Suspense } from "react";
import "./assets/tailwind.css";
// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import NotFound from "./pages/NotFound";
// import ErrorPage from "./pages/ErrorPage";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const CheckProduct = React.lazy(() => import("./pages/CheckProduct"));
const Guest = React.lazy(() => import("./pages/Guest"));
const User = React.lazy(() => import("./pages/User"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
// const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/error/:code" element={<ErrorPage />} />
        <Route path="/*" element={<NotFound />} />

        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
          <Route path="/cekProduk" element={<CheckProduct />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/error/:code" element={<ErrorPage />} />
          <Route path="/user" element={<User />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;