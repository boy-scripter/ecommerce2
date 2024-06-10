import ApiError from "@/utils/ApiError.ts"

export default class ApiResponse {

    message: string;
    data: any;
    
    constructor(message: string, data: any , api : ApiError) {
        this.message = message;
        this.data = data;
    }

}