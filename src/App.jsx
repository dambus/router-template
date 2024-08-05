import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import './App.css'

//layouts
import RootLayout from './Layouts/RootLayout'

//pages
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>,
    ),
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
