import { useProjects } from "../hooks/useProjects";

import { Skeleton } from "@mui/material";

import ErrorPage from "./ErrorPage";
import NotFoundPage from "./NotFoundPage";
import ProjectsList from "../components/ProjectsList";

export default function ProjectsPage() {
  const { data, isLoading, error } = useProjects();

  if (isLoading) return <Skeleton variant="rounded" width={2000} height={60} />;
  if (error) return <ErrorPage />;
  if (!data) return <NotFoundPage />;

  return <ProjectsList data={data}/>;
}
