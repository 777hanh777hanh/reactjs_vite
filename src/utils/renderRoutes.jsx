import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function renderRoutes(routes) {
    return routes.map((route) => {
        const { component } = route;
        const Page = component;
        let Layout = Fragment;
        const NewElement = (
            <Layout>
                <Link to="/">Home</Link>
                <br />
                <Link to="/contact">Contact Us</Link>
                <br />
                <Link to="/about">About</Link>
                <br />
                <Page />
            </Layout>
        );
        return { ...route, element: NewElement };
    });
}

export default renderRoutes;
