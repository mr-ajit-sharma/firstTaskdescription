class ApiResponse{
    constructor(data,statusCode,message="success"){
        this.data=data,
        this.message=message,
        this.statusCode=statusCode<400
    }
}
export default ApiResponse