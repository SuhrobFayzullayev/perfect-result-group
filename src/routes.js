import About from "./pages/About";
import Home from "./pages/Home/Home";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import Vacancies from "./pages/Vacancies/Vacancies";

const routes = [
  { path: `/`, element: <Home /> },
  { path: `/portfolio`, element: <PortfolioPage /> },
  { path: `/about`, element: <About /> },
  { path: `/vacancies`, element: <Vacancies /> },
];
export default routes;
