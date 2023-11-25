import { routes } from '../configs';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import HomePage from '../pages/home';

const publicRoutes = [
    {
        path: routes.home,
        component: HomePage,
    },
    {
        path: routes.contact,
        component: ContactPage,
    },
    {
        path: routes.about,
        component: AboutPage,
    },
];

export { publicRoutes };
