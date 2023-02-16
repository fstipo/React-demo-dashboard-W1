import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// layouts
import RootLayout from './layouts/RootLayout'
import PeopleLayout from './layouts/PeopleLayout'

// pages
import Home from "./pages/Home"
import PeopleAll from "./pages/people/PeopleAll"
import Assets from "./pages/Assets"
import PageNotFound from './pages/PageNotFound'

// loader function
import { getPeople } from './hooks/usePeople'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='people' element={<PeopleLayout />}>
        <Route
          index
          element={<PeopleAll />}
          loader={getPeople}
        />
      </Route>
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





