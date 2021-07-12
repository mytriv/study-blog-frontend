import axios, {AxiosResponse} from "axios";
import {User} from "./models/user.model";

class UserService {
    getMe(): Promise<AxiosResponse<User>> {
        return axios.get("/api/v1/users/me");
    }
}

export const userService = new UserService();