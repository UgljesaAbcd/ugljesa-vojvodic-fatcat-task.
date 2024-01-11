import axios from 'axios';

import type {
    AxiosRequestConfig,
    ResponseType as AxiosResponseType,
    AxiosHeaders,
    AxiosHeaderValue,
    RawAxiosRequestHeaders,
    AxiosResponse,
} from 'axios';

const baseApiInstance = axios.create();

baseApiInstance.interceptors.response = axios.interceptors.response;
baseApiInstance.defaults.headers = axios.defaults.headers;

export {
    baseApiInstance,
    AxiosRequestConfig,
    AxiosResponseType,
    AxiosHeaders,
    AxiosHeaderValue,
    RawAxiosRequestHeaders,
    AxiosResponse,
};
