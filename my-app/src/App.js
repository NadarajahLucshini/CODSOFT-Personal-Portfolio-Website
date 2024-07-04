import { BrowserRouter, useRoutes } from "react-router-dom";
import MainRoute from "./Routes/Routes";

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
