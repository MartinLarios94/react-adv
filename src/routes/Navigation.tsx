import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "./routes";

import logo from "../logo.svg";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }, index: number) => (
                <li key={index}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }, index: number) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to="/lazy1" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
