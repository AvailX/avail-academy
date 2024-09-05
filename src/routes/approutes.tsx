import App from 'App';
import React, { Fragment } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
  },
];

const router = createBrowserRouter(
  routes.map(({ path, element }) => {
    const Component = Fragment;
    return {
      path,
      element: <Component>{element}</Component>,
    };
  })
);

export default router;
