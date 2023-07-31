import { AxiosResponse } from "axios";
import { CustomHandler } from './customHandler'

export class ResponseException extends Error {
  private customHandler = new CustomHandler();

  handleResponse<T>(response: AxiosResponse<T>): T {
    const { status } = response;
    const possibleStatus = [400, 404, 500];
    const authStatus = [401, 403];
  
    if (possibleStatus.includes(status)) {
      this.customHandler.handleError(this);
    }
  
    if (authStatus.includes(status)) {
      this.customHandler.handleError(this);
    }

    this.customHandler.handleSuccess('Success!');
  
    return response.data;
  }
}