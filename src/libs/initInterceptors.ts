import axios from "axios";

axios.interceptors.request.use((config) => {
    config.withCredentials = true

    return config
})

axios.interceptors.response.use(response => response, (error) => {
    const status = error.response ? error.response.status : null
    console.log(error.response)

    if (status !== 401) {
        return Promise.reject(error);
    }
    const isAuthPages = window.location.pathname.includes("/auth/login") || window.location.pathname.includes("/auth/signup");
    //console.log(isAuthPages)
    if (error.response?.config.url.includes("/api/v1/auth/refresh")){

        return Promise.reject(error)
            .then(()=>{
                if(isAuthPages){
                    return
                }
                window.location.href  = "/auth/login";
            });
    }

    return axios.post("/api/v1/auth/refresh", {})
        .then(()=>{
            return  axios.request(error.config)
        })
    });
