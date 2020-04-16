// 定义命令空间+接口a申明jax返回类型

declare namespace Ajax {
    // axios 返回的数据
    export interface AxiosResponse {
        data: AjaxResponse
    }

    // 请求接口数据
    export interface AjaxResponse {
        code: number,
        data: object | null | Array<any>,
        message: string
    }
}