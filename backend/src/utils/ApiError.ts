class ApiError extends Error{
    statusCode:number;
    message:string;
    path:string;
    error:any;
    constructor( message:string, statusCode:number,path:string, error:any =null){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.path = path;
        this.error=error;
    }
};

export default ApiError;