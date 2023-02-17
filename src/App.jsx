import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// layouts
import RootLayout from './layouts/RootLayout'
import PeopleLayout from './layouts/PeopleLayout'
import AssetsLayout from "./layouts/AssetsLayout"

// pages
import Home from "./pages/Home"
import PeopleAll from "./pages/people/PeopleAll"
import AssetAll from "./pages/Assets/AssetsAll"
import PageNotFound from './pages/PageNotFound'

// loader function
import { usePeopleData } from './hooks/usePeople'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='people' element={<PeopleLayout />}>
        <Route
          index
          element={<PeopleAll />}
        />
      </Route>
      <Route path='assets' element={<AssetsLayout />} >
        <Route
          index
          element={<AssetAll />}
        />
      </Route>
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





