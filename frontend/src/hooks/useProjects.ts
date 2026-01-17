import { useQuery } from "@tanstack/react-query";
import { projectsApi } from "../api/ProjectsApi";

export const useProjects = () =>
  useQuery({
    queryKey: ["projects"],
    queryFn: () => projectsApi.getProjects(),
  });
