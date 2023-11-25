import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { createHashRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './routes';
import { renderRoutes } from './utils';
const router = createBrowserRouter(renderRoutes(publicRoutes));
// const router = createHashRouter(renderRoutes(publicRoutes));

function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
