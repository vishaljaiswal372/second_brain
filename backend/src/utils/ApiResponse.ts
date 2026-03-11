class ApiResponse{
    message:string;
    data:any;
    success:boolean;
    statusCode:number;
    constructor(message:string, statusCode:number , data:any = null){
        this.message = message;
        this.data = data;
        this.success = (statusCode>=200 && statusCode<300) ? true:false;
        this.statusCode = statusCode;
    }
};

export default ApiResponse;