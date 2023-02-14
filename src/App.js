import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import Services from "./pages/Services/Services";
import Vacancies from "./pages/Vacancies/Vacancies";

function App() {
  const routes = [
    { path: `/`, element: <Home /> },
    { path: `/portfolio`, element: <PortfolioPage /> },
    { path: `/about`, element: <About /> },
    { path: `/vacancies`, element: <Vacancies /> },
    { path: `/services`, element: <Services /> },
  ];
  return (
    <>
      <Layout>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
