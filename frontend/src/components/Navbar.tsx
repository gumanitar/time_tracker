import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { routesList } from "../routes/routesList";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const pages: string[] = Object.keys(routesList);
  const currentTab = pages.findIndex(
    (page) => routesList[page] === location.pathname,
  );

  return (
    <Tabs value={currentTab} centered>
      {pages.map((page) => (
        <Tab
          key={page}
          label={page}
          component={NavLink}
          to={routesList[page]}
        />
      ))}
    </Tabs>
  );
}
