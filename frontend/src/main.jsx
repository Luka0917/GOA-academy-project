import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'

import App from './App.jsx';
import Crews from './pages/Crews.jsx';
import News from './pages/News.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';

const router = createBrowserRouter([
  { path: '/', Component: App },
  { path: '/crews', Component: Crews },
  { path: '/news', Component: News },
  { path: '/signin', Component: SignIn },
  { path: '/signup', Component: SignUp }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)