// This is a class and designed to create custom error objects in our 
// application and a/c to this designed custom error, errorMiddleware 
// will work and responsible for any of the error

class ErrorHandler extends Error{
    constructor(
        message="something went wrong",
        statusCode,
        error=[]
    ){
        super(message)
        this.statusCode=statusCode
        this.message=message
    }
}

export default ErrorHandler;