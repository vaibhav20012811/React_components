// import { useState } from "react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Page/Home";
import Dashboard from "./components/Page/Dashboard";
import Projects from "./components/Page/Projects";
import Calender from "./components/Page/Calender";
import Tasks from "./components/Page/Tasks";
import Settings from "./components/Page/Settings";
import Help from "./components/Page/Help";

function App() {
  const sidebarItemObj = [
    { text: "Home", path: "/", component: <Home /> },
    { text: "Dashboard", path: "/dashboard", component: <Dashboard /> },
    { text: "Projects", path: "/projects", component: <Projects /> },
    { text: "Calendar", path: "/Calender", component: <Calender /> },
    { text: "Tasks", path: "/tasks", component: <Tasks /> },
    { text: "Settings", path: "/settings", component: <Settings /> },
    { text: "Help", path: "/help", component: <Help /> },
  ];
  //test
  const initialActivePage = localStorage.getItem("activePage") || "/";

  return (
    <>
      <Router>
        <Sidebar className="absolute">
          <SidebarItem />
        </Sidebar>

        <Routes>
          {sidebarItemObj.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
          <Route
            path="/"
            element={<Navigate replace to={initialActivePage} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
