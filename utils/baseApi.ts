import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async request<T>(config: AxiosRequestConfig): Promise<T | any> {
        try {
            const params = {
                ...config,
                baseURL: this.baseUrl,
            }
            const response: AxiosResponse<T> = await axios.request<T>(params);
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    return error.response.data;
                } else if (error.request) {
                    return 'No response from server';
                } else {
                    return 'An error occurred while processing your request';
                }
            } else {
                return 'An unexpected error occurred';
            }
        }
    }
}

export default ApiClient;
