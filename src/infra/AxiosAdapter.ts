import axios from "axios";
import { ResponseException } from "../exceptions/responseException";

export class AxiosAdapter {
  private exception = new ResponseException();

  async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return this.exception.handleResponse(response);
  }
}
