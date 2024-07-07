import { lazy } from "react";

// Lazy loading components
const Home = lazy(() => import("../Pages/HomePage"));
const About = lazy(() => import("../Pages/AboutMe"));
const Contact = lazy(() => import("../Pages/Contactme"));
const Project = lazy(() => import("../Pages/MyProject"));



const MainRoute = [
    { path: "/", element: <Home/> },
    { path: "/project", element: <Project/> },
    { path: "/aboutme", element: <About/> },
    { path: "/contact", element: <Contact/> },

    
];

export default MainRoute;
