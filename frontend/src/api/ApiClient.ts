import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

export default class ApiClient {
  protected axiosInstance: AxiosInstance;

  constructor(baseURL?: string, config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create({
      baseURL,
      ...config,
    });
  }

  async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(
        url,
        config
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
