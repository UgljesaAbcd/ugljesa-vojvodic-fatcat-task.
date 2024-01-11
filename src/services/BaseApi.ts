import { API } from '@common/constants';
import {
    filterEmptyStrings,
    insertPathVariables,
} from '@common/helpers/helpers';
import {
    baseApiInstance,
    AxiosRequestConfig,
    AxiosResponseType,
    AxiosHeaders,
    AxiosHeaderValue,
    RawAxiosRequestHeaders,
    AxiosResponse,
} from '@common/libs';

interface DefaultOptions {
    baseURL?: string;
    headers?:
        | AxiosHeaders
        | Partial<
              RawAxiosRequestHeaders & {
                  Accept: AxiosHeaderValue;
                  'Content-Length': AxiosHeaderValue;
                  'User-Agent': AxiosHeaderValue;
                  'Content-Encoding': AxiosHeaderValue;
                  Authorization: AxiosHeaderValue;
              }
          >
        | undefined;
    method?: string;
    params?: Record<string, string | number | boolean> | undefined;
    data?: Record<string, string | number | boolean | undefined> | undefined;
    url?: string | undefined;
    responseType?: AxiosResponseType | undefined;
}

interface PathVariables {
    [key: string]: string | number | boolean | undefined | null;
}

interface AxiosRequestParams<T> {
    path?: string;
    params?: Record<string, string | number | boolean | undefined>;
    pathVariables?: PathVariables;
    headers?: Record<string, string>;
    baseURL?: string;
    data?: T | undefined;
}

export const getDefaultOptions = ({
    baseURL = API.BASE_URL,
    headers = {
        'Content-Type': 'application/json',
    },
    method = 'get',
    ...rest
}: DefaultOptions): AxiosRequestConfig => {
    return {
        headers,
        baseURL,
        method,

        ...rest,
    };
};

export const getByPathAndParams = <T>({
    path = '/',
    params,
    pathVariables,
    headers,
}: AxiosRequestParams<T> = {}) => {
    const requestOptions: AxiosRequestConfig = {
        params: filterEmptyStrings(params),
        url: insertPathVariables(path, pathVariables),
        headers,
    };
    return baseApiInstance(getDefaultOptions(requestOptions));
};

// data - is value that will be sent as payload
export const putByPathAndData = <T>({
    path = '/',
    data,
    pathVariables,
    ...rest
}: AxiosRequestParams<T> = {}) => {
    const requestOptions: AxiosRequestConfig = {
        url: insertPathVariables(path, pathVariables),
        data,
        method: 'put',
        ...rest,
    };
    return baseApiInstance(getDefaultOptions(requestOptions));
};

export const postByPathAndData = <T>({
    path = '/',
    data,
    pathVariables,
    params,
    headers,
    baseURL,
    ...rest
}: AxiosRequestParams<T> = {}) => {
    const requestOptions: AxiosRequestConfig = {
        url: insertPathVariables(path, pathVariables),
        params: filterEmptyStrings(params),
        data,
        method: 'post',
        headers,
        baseURL,
        ...rest,
    };
    return baseApiInstance(getDefaultOptions(requestOptions));
};

export const deleteByPath = <T>({
    path = '/',
    pathVariables,
}: AxiosRequestParams<T> = {}) => {
    return baseApiInstance(
        getDefaultOptions({
            url: insertPathVariables(path, pathVariables),
            method: 'delete',
        })
    );
};

// configList - is array of path strings
export const getAllByPathList = async (configList: string[] = []) => {
    const response: Promise<AxiosResponse>[] = [];
    configList.map((path) => {
        response.push(getByPathAndParams({ path }));
    });
    return await Promise.all(response);
};
