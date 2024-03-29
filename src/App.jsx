import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// layouts
import RootLayout from './layouts/RootLayout'
import PeopleLayout from './layouts/PeopleLayout'


// pages
import Home from "./pages/Home"
import PeopleAll from "./pages/people/PeopleAll"
import PeopleInMoment from "./pages/people/PeopleInMoment"
import PageNotFound from './pages/PageNotFound'
import PeopleAddUser from './pages/people/PeopleAddUser'
import PeopleDetails from "./pages/people/people-details/PeopleDetails"
import HistoryDetails from './pages/people/people-history/HistoryDetails'

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route element={<RootLayout />}>

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

      {<Route
        path='people/person-details/:id'
        element={<PeopleDetails />}
      />}
      {<Route
        path='people/history-details/:id'
        element={<HistoryDetails />}
      />}

      <Route path='*' element={<PageNotFound />} />
    </Route>


  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App





