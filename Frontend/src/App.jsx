
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect-us'
import Resume from './pages/Resume'
import HireMe from './components/Hire-me'
import Projects from './pages/Projects'

function App() {
  

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,     // Your layout wrapper
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contect />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
      ],
    },

   {
    path:"Hire-me",
    element:<HireMe/>
   }
  ])

  return (
    <>
      <RouterProvider router={routes} />
     
    </>
  )
}

export default App
