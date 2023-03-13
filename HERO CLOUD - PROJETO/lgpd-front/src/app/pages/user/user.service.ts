import {ErrorHandler, Injectable} from "@angular/core";
import axios from 'axios';
import { AxiosInstance } from "axios";

export interface Params {
  [ key: string ]: any;
}

export interface GetOptions {
  url: string;
  params?: Params;
  data?: any;
}

export interface ErrorResponse {
  id: string;
  code: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;

  constructor( errorHandler: ErrorHandler ) {
    this.errorHandler = errorHandler;

    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        "X-Initialized-At": Date.now().toString()
      }
    });
  }

  public async get<T>( options: GetOptions ) : Promise<T> {
    try {
      let axiosResponse = await this.axiosClient.request<T>({
        method: "get",
        url: options.url,
        params: options.params
      });

      return( axiosResponse.data );
    } catch ( error ) {
      return( Promise.reject( this.normalizeError( error ) ) );
    }
  }

  public async put<T>( options: GetOptions ) : Promise<T> {
    //Modulo 7 - Adicionar esse config para trocar o content-type do header
    let config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    try {
      //Modulo 7 - Alterar o método request para esse put passando esses parametros
      let axiosResponse = await this.axiosClient.put<T>(options.url, options.data, config);

      return( axiosResponse.data );
    } catch ( error ) {
      return( Promise.reject( this.normalizeError( error ) ) );
    }
  }

  public async post<T>( options: GetOptions ) : Promise<T> {
    //Modulo 7 - Adicionar esse config para trocar o content-type do header
    let config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    try {
      //Modulo 7 - Alterar o método request para esse post passando esses parametros
      let axiosResponse = await this.axiosClient.post<T>(options.url, options.data, config);

      return( axiosResponse.data );
    } catch ( error ) {
      return( Promise.reject( this.normalizeError( error ) ) );
    }
  }
  public async delete<T>( options: GetOptions ) : Promise<T> {
    try {
      let axiosResponse = await this.axiosClient.request<T>({
        method: "delete",
        url: options.url,
        params: options.params
      });

      return( axiosResponse.data );
    } catch ( error ) {
      return( Promise.reject( this.normalizeError( error ) ) );
    }
  }

  private normalizeError( error: any ) : ErrorResponse {
    console.log('Error:', error)
    this.errorHandler.handleError( error );

    return({
      id: "-1",
      code: "UnknownError",
      message: "An unexpected error occurred."
    });

  }
}
