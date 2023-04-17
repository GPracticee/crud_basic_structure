

export const getToken = ()=>{
    if(localStorage.getItem("user-info")){
        return JSON.parse(localStorage.getItem("user-info")).token;
    }
    else{
        return false;
    }
}

export const getStorageData = ()=>{
    if(localStorage.getItem("user-info")){
        return JSON.parse(localStorage.getItem("user-info"))
    }
}

export const setTokenData = (storage)=>{
    localStorage.setItem("user-info", JSON.stringify(storage))
}

export const destroyStorage = ()=>{
    localStorage.clear()
}