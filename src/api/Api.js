import { getToken } from "../constant/Constant";
import { RouteUrl } from "../route/Route";
import { API_URL } from "../Url/Url";



export const signup = async (addData) => {
    const response = await fetch(API_URL.Auth + RouteUrl.signup, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(addData)
    });
    console.log(response.body)
    return response.json()
}

export const login = async (loginData) => {
    const response = await fetch(API_URL.Auth + RouteUrl.login, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    });
    console.log(loginData);
    return response.json();
}


export const addEmployeeData = async (addEmployeeData) => {
    const response = await fetch(API_URL.Employee + RouteUrl.addemployeedata, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${getToken()}`

        },
        body: JSON.stringify(addEmployeeData)
    });
    console.log(response.body)
    return response.json()
}

export const getUserData = async () => {
    const response = await fetch(API_URL.Employee + RouteUrl.getuserdata, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    });
    console.log(response.body)
    return response.json()
}

export const singleUserData = async (id) => {
    const response = await fetch(API_URL.Employee + RouteUrl.singleemployeedata + `/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    })
    return response.json()
}
export const editUserData = async (id, form) => {
    const response = await fetch(API_URL.Employee + RouteUrl.updateemployeedata + `/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        },
        body: JSON.stringify(form)
    })

    return response.json()
}

export const deleteUser = async (id) => {
    const response = await fetch(API_URL.Employee + RouteUrl.deleteemployee + `/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    })
    return response.json();
}

export const imageUpload = async (data) => {
    const response = await fetch(API_URL.Employee + RouteUrl.upload, {
        method: "POST",
        headers: {
            "Authorization": `bearer ${getToken()}`
        },
        body: data
    })
    return response;
}

export const forgetPassword = async (ForgetData) => {
    const response = await fetch(API_URL.Auth + RouteUrl.forgetpassword, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ForgetData)
    });
    console.log(ForgetData);
    return response.json();
}