export const validateString = (value: unknown, maxLength : number) => {
    if(!value || typeof value !== 'string' || value.length > maxLength){
        return false
    }
    return true;
}


export const getErrorMessage = (error: unknown): String => {
    let message: String;
    if(error instanceof Error) {
        message = error.message;
    }
    
    else if(error && typeof error === 'object' && 'message' in error){ 
      return String(error.message);
    }

    else if(typeof error === 'string'){ 
        return error;
    }

    return `Unknown error: ${error}`
}