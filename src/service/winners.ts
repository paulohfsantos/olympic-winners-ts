import { AxiosAdapter } from "../infra/AxiosAdapter";
import { Winner } from "../types/winner";
import { env } from '../validator/env';

export class WinnerService extends AxiosAdapter {
  private readonly url = env.VITE_API_URL

  async getWinners(): Promise<Winner[]> {
    console.log('dsss', this.url);
    return this.get<Winner[]>(this.url);
  }
}