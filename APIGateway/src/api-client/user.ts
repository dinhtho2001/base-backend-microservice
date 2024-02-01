import ApiClient from "../../../utils/baseApi";
import constants from "../../../services/UserService/src/utils/constants";

const baseUrl = constants.baseUrl;
const apiClient = new ApiClient(baseUrl);

export const getUsers = () => {
    return apiClient.request({
        method: 'GET',
        url: `/users/`,
    });
}

export const getUser = (queryParams: any) => {
    return apiClient.request({
        method: 'GET',
        url: `/users/user`,
        params: queryParams
    });
}

export const createUser = (user: any) => {
    return apiClient.request({
        method: 'POST',
        url: '/users',
        data: user,
    });
}
