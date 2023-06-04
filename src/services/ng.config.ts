import { environment } from "../environments/environment";

/**
 * @module NG Config
 * @description
 *
 * Configuration with backend
 *
 **/

export class NGconfig {

  private static path = environment.apiUrl;
  private static BaseUrl = environment.BaseUrl;

  public static getPath(): string {
    return NGconfig.path;
  }

  public static getBaseUrl(): string {
    return NGconfig.BaseUrl;
  }
}
