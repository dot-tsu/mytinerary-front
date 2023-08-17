import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Cities from "./pages/Cities"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/cities", element: <Cities /> }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
