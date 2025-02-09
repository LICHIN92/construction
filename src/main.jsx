import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/mainPages/MainPage.jsx';
import Home from './pages/Home/Home.jsx';
import Contact from './pages/contact/Contact.jsx';
import AboutUs from './pages/about/AboutUs.jsx';
import Gallery from './pages/gallery/Gallery.jsx';
import Login from './pages/login/Login.jsx';
import Workers from './pages/Workers/Workers.jsx'
import AuthProtect from './Components/ProtectedRoutes/AuthProtect.jsx';
import { Provider } from 'react-redux';
import store from './redux/Store'
import LoginProtect from './Components/ProtectedRoutes/LoginProtect.jsx';
import Contacted from './pages/contacted/Contacted.jsx';
import WorkPage from './pages/WorkPage/WorkPage.jsx';
import ListWorkers from './pages/WorkersList/ListWorkers.jsx';
import Service from './pages/services/Service.jsx';

const router = createBrowserRouter([
  {
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: '/login',
        element: (
          // <LoginProtect>
            <Login />
          // </LoginProtect>
        )
      },
      {
        path: "/Workers",
        element: (
          <AuthProtect>
            <Workers />
          </AuthProtect>
        )
      },
      {
        path: "/contracted",
        element: (
          <AuthProtect>
            <Contacted />
          </AuthProtect>
        )
      },
      {
        path: '/contracted/works',
        element: (
          <AuthProtect>
            <WorkPage />
          </AuthProtect>
        )
      },
      {
        path: "/WorkersList",
        element: (
          <AuthProtect>
            <ListWorkers/>
          </AuthProtect>
        )
      },
      {
        path:'/service',
        element:<Service/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
