import { toast } from 'react-toastify';

export class CustomHandler {
  handleError(error: Error): void {
    toast.error(error.message);
  }

  handleSuccess(message: string): void {
    toast.success(message);
  }
}