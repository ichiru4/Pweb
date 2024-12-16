import { get, post } from "../utils/axiosInstance";

export interface pageHelper {
    page: number;
    size: number;
}
export interface blogRequest {
    pageHelper: pageHelper;
}

export interface Blog{
    Id: string;
    Title: string;
    Content: string;
    AuthorId: string;
    PublishTime: string;
    Image: string;
    Description: string;
    Tags: string[];
}

export interface BaseResponse<T> {
    status: number;
    success: boolean;
    msg: string;
    msgDev?: string | null;
    response: T;
}


export const getBlogList = async (params: pageHelper) => {
    try {
        const response = await post<BaseResponse<Blog[]>>('/blog/GetBlogList', params);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error while fetching blog list');
    }
}

export const getBlogById = async (id:string) => {
    try {
        const response = await get<BaseResponse<Blog>>('/blog/GetBlogById', {id:id});
        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Error while fetching blog list');
    }
}