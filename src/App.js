import React from 'react';
import {
  // BrowserRouter as Router, Routes, Route, useLocation,
  createBrowserRouter, RouterProvider
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  // const { pathname, hash, key } = useLocation();
  //
  // useEffect(() => {
  //   if (hash === '') {
  //     window.scrollTo(0, 0);
  //   } else {
  //     setTimeout(() => {
  //       const id = hash.replace('#', '');
  //       const element = document.getElementById(id);
  //       if (element) {
  //         element.scrollIntoView();
  //       }
  //     }, 0);
  //   }
  // }, [pathname, hash, key]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'home',
          element: <Home />,
        },
      ],
    },
  ]);

  // if (import.meta.hot) {
  //   import.meta.hot.dispose(() => router.dispose());
  // }

  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Title />} />
    //     <Route path="/work" element={<Work />} />
    //     {/* <Route path="/about" component={About} /> */}
    //     {/* <Route path="/contact" component={ContactMe} /> */}
    //   </Routes>
    //   <Work />
    // </Router>
    <RouterProvider router={router} />
  );
};

export default App;
