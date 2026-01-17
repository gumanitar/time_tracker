import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage";
import { routesList } from "./routesList";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path={routesList.projects} element={<ProjectsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
