import ApiClient from "../../../utils/baseApi";

const baseUrl = 'http://localhost:3004';
const apiClient = new ApiClient(baseUrl);

export const getUsers = () => {
    return apiClient.request({
        method: 'GET',
        url: `/users/`,
    })
}

export const createUser = (user: any) => {
    return apiClient.request({
        method: 'POST',
        url: '/users',
        data: user,
        })
}
