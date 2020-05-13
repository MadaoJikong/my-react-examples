import Home from '../pages/home';
import About from '../pages/about';

const routeModules = [
    {
        name: "首页",
        exact: true,
        path: "/",
        realPath: "../pages/home",
        component: Home
    },
    {
        name: "首页",
        exact: false,
        path: "/Home",
        realPath: "../pages/home",
        component: Home

    },
    {
        name: "关于",
        exact: false,
        path: "/About",
        realPath: "../pages/about",
        component: About
    }
];

export { routeModules };