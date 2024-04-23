import axios from "axios";

const base_url = 'http://localhost:5000/api/'
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
    baseURL:base_url,
})

export const userRequest = axios.create({
    baseURL:base_url,
    headers:{token:`Bearer ${token}`}
})
