interface LogsCreate{
    name?:string;
    app?: string,
    process?: string,
    type?: string,
    message: string;
    details: string; 
    createdAt?: Date;
    createdBy?: string;   
}

export {
    LogsCreate
}