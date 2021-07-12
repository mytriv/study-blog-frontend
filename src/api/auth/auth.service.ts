import axios from "axios";

class AuthService {
    signup(email: string, password: string) {
        return axios.post("/api/v1/auth/basic/signup", { email, password });
    }

    login(email: string, password: string) {
        return axios.post("/api/v1/auth/basic/login", { email, password });
    }

    verify(code: number) {
        return axios.post("/api/v1/auth/basic/verify-email", { code });
    }
}

export const authService = new AuthService();
