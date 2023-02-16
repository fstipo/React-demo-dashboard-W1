import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// layouts
import RootLayout from './layouts/RootLayout'

// pages
import Home from "./pages/Home"
import People from "./pages/People"
import Assets from "./pages/Assets"
import PageNotFound from './pages/PageNotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='people' element={<People />} />
      <Route path='assets' element={<Assets />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>

  )
)

const App = () => {

  // TODO app - sidebar - minified add  invisible on navigation
  return (
    <RouterProvider router={router} />
  )
}

export default App





