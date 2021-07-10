import axios from "axios";

axios.interceptors.response.use(response => response, (error) => {
    const status = error.response ? error.response.status : null
    console.log(error.response)

    if (status !== 401) {
        return Promise.reject(error);
    }

    if (error.response?.config.url.includes("/api/v1/auth/refresh")){
        return  window.location.href  = "/auth/login";
    }

    return axios.post("/api/v1/auth/refresh", {})
        .then(()=>{
            return  axios.request(error.config)
        })
    });