import { AxiosInstance } from "axios";
import Stringify from "query-string";
import { DataProvider } from "@refinedev/core";
import { axiosInstance, generateSort, generateFilter } from "./utils";

type MethodTypes = "get" | "delete" | "head" | "options";
type MethodTypesWithBody = "post" | "put" | "patch";

export const dataProvider = (
    apiUrl: string,
    httpClient: AxiosInstance = axiosInstance,
): Omit<
    Required<DataProvider>,
    "createMany" | "updateMany" | "deleteMany"
> => ({
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
        const url = `${apiUrl}/${resource}`;

        const {
            current = 1,
            pageSize = 10,
            mode = "server",
        } = pagination ?? {};

        const { headers: headersFromMeta, method } = meta ?? {};
        const requestMethod = (method as MethodTypes) ?? "get";

        
        const queryFilters = generateFilter(filters);
        console.log(filters);
        console.log(queryFilters);

        const query: {
            SkipCount?: number;
            _end?: number;
            _sort?: string;
            _order?: string;
        } = {};

        if (mode === "server") {
            query.SkipCount = (current - 1) * pageSize;
            query._end = current * pageSize;
        }

        
        const generatedSort = generateSort(sorters);
        console.log(sorters);
        console.log(generatedSort);

        if (generatedSort) {
            const { _sort, _order } = generatedSort;
            query._sort = _sort.join(",");
            query._order = _order.join(",");
        }

        const { data, headers } = await httpClient[requestMethod](
            `${url}?${Stringify.stringify(query)}&${Stringify.stringify(queryFilters)}`,
            {
                headers: headersFromMeta,
            },
        ); 
        
        // console.log("Inside");
        console.log(data);
        
        //////////////            our code       //////////////
        return {
            data: data.items ?? data,
            total: data.totalCount ?? data.length ?? 0,
        };
        
        ///////////////        their code    ////////
        // const total = +headers["x-total-count"];
        // return {
        //     data,
        //     total: total || data.length,
        // };

    },

    getMany: async ({ resource, ids, meta }) => {
        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypes) ?? "get";

        const { data } = await httpClient[requestMethod](
            `${apiUrl}/${resource}?${Stringify.stringify({ id: ids })}`,
            { headers },
        );

        return {
            data,
        };
    },

    create: async ({ resource, variables, meta }) => {
        const url = `${apiUrl}/${resource}`;

        // console.log(url);
        
        // console.log(variables);
        

        const { headers, method } = meta ?? {};

        console.log(meta);
        
        console.log(headers, method);
        

        const requestMethod = (method as MethodTypesWithBody) ?? "post";

        const { data } = await httpClient[requestMethod](url, variables, {
            headers,
        });

        // console.log(data);
        

        return {
            data,
        };
    },

    update: async ({ resource, id, variables, meta }) => {
        const url = `${apiUrl}/${resource}/${id}`;
        // console.log(url);

        
        // console.log("hey");
        

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "put";

        const { data } = await httpClient[requestMethod](url, variables, {
            headers,
        });

        // console.log(data);
        

        return {
            data,
        };
    },

    getOne: async ({ resource, id, meta }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        // console.log(url);

        // console.log(meta);
        

        const { headers, method } = meta ?? {};
        
        const requestMethod = (method as MethodTypes) ?? "get";

        const { data } = await httpClient[requestMethod](url, { headers });

        // console.log(data);
        

        return {
            data,
        };
    },

    deleteOne: async ({ resource, id, variables, meta }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "delete";

        const { data } = await httpClient[requestMethod](url, {
            ...variables,
            headers,
        });

        return {
            data,
        };
    },

    getApiUrl: () => {
        return apiUrl;
    },

    custom: async ({
        url,
        method,
        filters,
        sorters,
        payload,
        query,
        headers,
    }) => {
        let requestUrl = `${url}?`;

        if (sorters) {
            const generatedSort = generateSort(sorters);
            if (generatedSort) {
                const { _sort, _order } = generatedSort;
                const sortQuery = {
                    _sort: _sort.join(","),
                    _order: _order.join(","),
                };
                requestUrl = `${requestUrl}&${Stringify.stringify(sortQuery)}`;
            }
        }

        if (filters) {
            const filterQuery = generateFilter(filters);
            requestUrl = `${requestUrl}&${Stringify.stringify(filterQuery)}`;
        }

        if (query) {
            requestUrl = `${requestUrl}&${Stringify.stringify(query)}`;
        }

        let axiosResponse;
        switch (method) {
            case "put":
            case "post":
            case "patch":
                axiosResponse = await httpClient[method](url, payload, {
                    headers
                });
                break;
            case "delete":
                axiosResponse = await httpClient.delete(url, {
                    data: payload,
                    headers: headers
                });
                break;
            default:
                axiosResponse = await httpClient.get(requestUrl,{
                    headers
                });
                break;
        }

        const { data } = axiosResponse;

        return Promise.resolve({ data });
    },
});
