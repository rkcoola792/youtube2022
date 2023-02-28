import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// creating the layout
const Layout=()=>{
  return(
    <div className="app">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

// handling different routes
const router = createBrowserRouter([
  
  // route 1
  {
    path: "/",
    element: <Home></Home>,
  },

  // route 2
  {
    path: "/products/:id",
    element: <Products></Products>
  },

  // route 3
  {
    path: "/product/:id",
    element: <Product></Product>
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
