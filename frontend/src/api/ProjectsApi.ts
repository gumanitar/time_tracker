import { type AxiosRequestConfig } from "axios";
import type ProjectI from "../interfaces/ProjectI";

import ApiClient from "./ApiClient";

class ProjectsApi extends ApiClient {
  private static readonly baseUrl = "http://localhost:3000";
  private static readonly endpoint: string = "projects";

  constructor(config?: AxiosRequestConfig) {
    super(ProjectsApi.baseUrl, {
      ...config,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getProjects(): Promise<ProjectI[]> {
    try {
      const response = await this.get<ProjectI[]>(`/${ProjectsApi.endpoint}`);

      return response;
    } catch (error) {
      throw error;
    }
  }
}
export const projectsApi = new ProjectsApi();
