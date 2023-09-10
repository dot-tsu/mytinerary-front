import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import { RouterProvider, createHashRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Cities from './pages/Cities';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Details from './pages/Details';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <PageNotFound/>, 
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/cities', element: <Cities /> },
      { path: '/cities/:placeId', element: <Details /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
