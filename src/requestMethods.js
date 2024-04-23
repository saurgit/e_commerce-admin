import axios from "axios";

// const base_url = 'http://localhost:5000/api/'
export const BASE_URL ="https://e-commerce-api-7yrk.onrender.com/api/"
let token=""
if(localStorage.getItem("persist:root")){
    const temp=JSON.parse(localStorage.getItem("persist:root"))
    if(JSON.parse(temp.user).currentUser){
        token=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
    }
}

// const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.accessToken
// console.log(token)


// axios.create is a factory to create new  instances of axios with pre-configured options

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${token}`}
})
