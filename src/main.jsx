import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// router-dom
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { publicRoutes } from './routes';
// import { renderRoutes } from './utils';

// const router = createBrowserRouter(renderRoutes(publicRoutes));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <RouterProvider router={router}> */}
        <App />
        {/* </RouterProvider> */}
    </React.StrictMode>,
);
