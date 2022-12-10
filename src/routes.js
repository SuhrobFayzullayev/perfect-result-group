import About from "./pages/About";
import Home from "./pages/Home/Home";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";

const routes = [
    { path: `/`, element: <Home /> },
    { path: `/portfolio`, element: <PortfolioPage /> },
    { path: `/about`, element: <About /> }
];
export default routes;
