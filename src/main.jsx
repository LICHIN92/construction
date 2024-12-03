import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import NavBaar from './Components/NavBar/NavBaar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Footer from './Components/footer/Footer.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/mainPages/MainPage.jsx';
import Home from './pages/Home/Home.jsx';
import Contact from './pages/contact/Contact.jsx';
import AboutUs from './pages/about/AboutUs.jsx';
import Gallery from './pages/gallery/Gallery.jsx';

const router = createBrowserRouter([
  {
    element: <MainPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/gallery",
        element:<Gallery/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
