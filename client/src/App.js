import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Layout = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ChakraProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      }
    ]
  }
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
