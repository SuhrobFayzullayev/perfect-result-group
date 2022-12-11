import About from "./pages/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

const routes = [
  { path: `/`, element: <Home /> },
  { path: `/about`, element: <About /> },
  { path: `/services`, element: <Services /> },
];
export default routes;
