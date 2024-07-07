import { BrowserRouter, useRoutes } from "react-router-dom";
import MainRoute from "./Routes/Routes";
import '@fortawesome/fontawesome-free/css/all.min.css';


function RoutesWrapper() {
  const routes = useRoutes(MainRoute);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  );
}

export default App;
