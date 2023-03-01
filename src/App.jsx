import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// layouts
import RootLayout from './layouts/RootLayout'
import PeopleLayout from './layouts/PeopleLayout'
import AssetsLayout from "./layouts/AssetsLayout"

// pages
import Home from "./pages/Home"
import PeopleAll from "./pages/people/PeopleAll"
import PeopleInMoment from "./pages/people/PeopleInMoment"
import AssetAll from "./pages/Assets/AssetsAll"
import PageNotFound from './pages/PageNotFound'
import AssetsInMoment from './pages/Assets/AssetsInMoment'
import PeopleAddUser from './pages/people/PeopleAddUser'
import PeopleUserDetails from './pages/people/PeopleUserDetails'
import PeopleDetails from "./pages/people/PeopleDetails"



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='people' element={<PeopleLayout />}>
        <Route
          index
          element={<PeopleAll />}
        />

        <Route
          path='in-moment'
          element={<PeopleInMoment />}
        />

      </Route>
      <Route
        path='people/add-user'
        element={<PeopleAddUser />}
      />
      <Route
        path='people/user-details/:id'
        element={<PeopleUserDetails />}
      />
      {<Route
        path='people/person-details/:id'
        element={<PeopleDetails />}
      />}

      <Route path='assets' element={<AssetsLayout />} >
        <Route
          index
          element={<AssetAll />}
        />
        <Route
          path='in-moment/:id'
          element={<AssetsInMoment />}
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





