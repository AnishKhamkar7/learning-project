class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck= ""

    ){
        super(message)
        this.statusCode = statusCode
        tihs.data= null
        this.message = message
        this.sucess = false;
        this.errors = errors    

        if(statck) {
            this.stack = statck

        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}