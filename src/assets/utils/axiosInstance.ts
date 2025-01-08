import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { useRouter } from 'vue-router';
const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 10000,
});
const router = useRouter();

axiosInstance.interceptors.response.use(res =>{
    return res;
}, error => {
    if(error.response){
        const { status } = error.response;
        // if(status === 401){
        //     router.push('/login');
        // }else if(status === 403){
        //     console.error('无权访问');
        // }else if(status === 500){
        //     console.error('服务器错误');
        // }
    }
    return Promise.reject(error);
}  
)

export const get = async <T>(url:string, params?: any)=>{
    const response:AxiosResponse<T> = await axiosInstance.get(url, {params});
    return response.data;
}

export const post = async <T>(url:string, data?:any)=>{
    const response:AxiosResponse<T> = await axiosInstance.post(url, data);
    return response.data;
}

export const put = async <T>(url:string, data?:any)=>{
    const response:AxiosResponse<T> = await axiosInstance.put(url, data);
    return response.data;
}
export default axiosInstance;