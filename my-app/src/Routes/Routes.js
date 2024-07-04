import { lazy } from "react";

// Lazy loading components
const Home = lazy(() => import("../Pages/HomePage"));



const MainRoute = [
    { path: "/", element: <Home/> },
    
];

export default MainRoute;
