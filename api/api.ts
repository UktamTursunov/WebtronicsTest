import axios from 'axios';
const baseURL = 'http://localhost:3004/';

const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use((request: any) => {
    request.headers = {
        ...request.headers,
    };
    return request;
});

axiosInstance.interceptors.response.use(
    (response: any) => response,
    ({ response }: any) => {
        const { status } = response || {};
        if (status === 401 || status === 403) {
            // error page
            console.log(404);
        }

        return Promise.reject(response);
    }
);

export default axiosInstance;