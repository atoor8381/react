import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements,Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import {Github, loaderfunction} from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home /> 
//       },
//       {
//         path: "/About",
//         element : <About />
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout />} >
      <Route path = '' element = {<Home />} />
      <Route path = "/About" element = {<About />} />
      <Route
      loader = {loaderfunction}
      path = "/Github" element = {<Github />} />
      <Route path = "/user/:userid" element = {<User />} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router = {router} />
    {/* The RouterProvider component is used to provide the routing system to the application */}
  </StrictMode>,
)
