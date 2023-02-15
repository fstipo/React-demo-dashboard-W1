import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// layouts
import RootLayout from './components/layouts/RootLayout'

// pages
import Home from "./pages/Home"
import People from "./pages/People"
import Assets from "./pages/Assets"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='people' element={<People />} />
      <Route path='assets' element={<Assets />} />
    </Route>

  )
)

const App = () => {

  return (
    // // TODO app - sidebar - minified add  invisible on navigation
    <RouterProvider router={router} />
  )
}

export default App





