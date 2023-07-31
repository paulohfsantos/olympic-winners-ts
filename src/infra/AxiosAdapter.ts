import axios from "axios";
import { ResponseException } from "../Exceptions/responseException";

export class AxiosAdapter {
  private exception = new ResponseException();

  async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return this.exception.handleResponse(response);
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    const response = await axios.post<T>(url, body);
    return this.exception.handleResponse(response);
  }

  async put<T>(url: string, body: unknown): Promise<T> {
    const response = await axios.put<T>(url, body);
    return this.exception.handleResponse(response);
  }

  async delete<T>(url: string): Promise<T> {
    const response = await axios.delete<T>(url);
    return this.exception.handleResponse(response);
  }
}