import { ErrorHandler, Injectable } from '@angular/core';
import axios from 'axios';
import { AxiosInstance } from 'axios';

export interface Params {
    [key: string]: any;
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

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    private axiosClient: AxiosInstance;
    private errorHandler: ErrorHandler;

    constructor(errorHandler: ErrorHandler) {
        this.errorHandler = errorHandler;
        this.axiosClient = axios.create({
            timeout: 3000,
            headers: {
                "X-Initialized-At": Date.now().toString()

            }
        });
    }

    // get
    public async get<T> (options: GetOptions ) : Promise<T> {
        try {
            let axiosResponse = await this.axiosClient.request<T>({
                method: "get",
                url: options.url,
                params: options.params
            });
            return ( axiosResponse.data);
        } catch (error) {
            return ( Promise.reject( this.normalizeError (error)));
        }
    }

    // put
    public async put<T> (options: GetOptions ) : Promise<T> {
        try {
            let axiosResponse = await this.axiosClient.request<T>({
                method: "put",
                url: options.url,
                params: options.params,
                data: options.data
            });
            return ( axiosResponse.data);
        } catch (error) {
            return ( Promise.reject( this.normalizeError (error)));
        }
    }

    // post
    public async post<T> (options: GetOptions ) : Promise<T> {
        try {
            let axiosResponse = await this.axiosClient.request<T>({
                method: "post",
                url: options.url,
                params: options.params,
                data: options.data
            });
            return ( axiosResponse.data);
        } catch (error) {
            return ( Promise.reject( this.normalizeError (error)));
        }
    }

    // delete
    public async delete<T> (options: GetOptions ) : Promise<T> {
        try {
            let axiosResponse = await this.axiosClient.request<T>({
                method: "delete",
                url: options.url,
                params: options.params
            });
            return ( axiosResponse.data);
        } catch (error) {
            return ( Promise.reject( this.normalizeError (error)));
        }
    }

    // normalização de erros
    private normalizeError(error: any) : ErrorResponse {
        console.log('Error: ', error)
        this.errorHandler.handleError(error);

        return ({
            id: "-1",
            code: "UnkownError",
            message: "An unexpected error occurred."
        })
    }

}
