import React, { createContext, useContext, useState } from "react";
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import {
  CalendarIcon,
  HomeIcon,
  LayersIcon,
  LayoutDashboard,
  LifeBuoy,
  SettingsIcon,
  StickyNote,
} from "lucide-react";
import { Link } from "react-router-dom";

const SidebarContext = createContext();
export default function Sidebar({ children }) {
  const [expanded, setexpanded] = useState(true);
  return (
    <>
      <aside className={`h-screen fixed`}>
        <nav className="h-full flex flex-col bg-black border-r border-gray-500 shadow-sm">
          <div className="p-2 bg-2 mb-1 flex justify-between item-center">
            <img
              src={logo}
              className={`overflow-hidden transition-all pr-2 ${
                expanded ? "w-48" : "w-0"
              }`}
              alt=""
            />

            <button
              className="flex items-center p-3 mt-2 mr-2 rounded-lg bg-indigo-300 hover:bg-indigo-400"
              onClick={() => setexpanded((curr) => !curr)}
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t border-gray-500 flex p-3">
            <img
              src={profile}
              alt=""
              className={`overflow-hidden transition-all pr-2 ${
                expanded ? "w-10" : "w-0"
              }`}
            />

            <div
              className={`flex justify-between items-center overflow-hidden ${
                expanded ? "w-30 m-0.5" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h2 className="font-semibold text-gray-50">drow.io</h2>
              </div>
            </div>
            <div
              className={`flex items-center p-1.5 rounded-lg bg-indigo-300 hover:bg-indigo-400 ${
                expanded ? "ml-[95px]" : "ml-0"
              }`}
            >
              <MoreVertical size={35} className="p-1 " />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem() {
  const sidebarItemObj = [
    {
      icon: <HomeIcon size={20} />,
      text: "Home",
      path: "/",
    },
    {
      icon: <LayoutDashboard size={20} />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <StickyNote size={20} />,
      text: "Projects",
      path: "/projects",
    },
    {
      icon: <CalendarIcon size={20} />,
      text: "Calender",
      path: "/calender",
    },
    {
      icon: <LayersIcon size={20} />,
      text: "Tasks",
      path: "/tasks",
    },
    {
      icon: <SettingsIcon size={20} />,
      text: "Settings",
      path: "/settings",
    },
    {
      icon: <LifeBuoy size={20} />,
      text: "Help",
      path: "/help",
    },
  ];

  const { expanded } = useContext(SidebarContext);

  // const location = useLocation();
  const [active, setActive] = useState(
    localStorage.getItem("activePage") || "Home"
  );

  const setHandleActive = (txt) => {
    setActive(txt);
    localStorage.setItem("activePage", txt);
  };

  return (
    <>
      <div>
        {sidebarItemObj.map((item, index) => (
          <Link to={item.path}>
            <li
              key={index}
              className={`relative flex items-center p-3 m-1 font-medium rounded-md text-gray-50 ${
                active === item.text
                  ? "bg-indigo-400"
                  : "hover:bg-indigo-300 text-gray-50"
              }`}
              onClick={() => setHandleActive(item.text, item.path)}
            >
              {item.icon}
              <span
                className={`overflow-hidden transition-all ${
                  expanded ? "w-32 ml-3" : "w-0"
                }`}
              >
                {item.text}
              </span>
            </li>
          </Link>
        ))}
      </div>
    </>
  );
}
