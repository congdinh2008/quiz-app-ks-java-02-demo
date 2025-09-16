import type { LoginRequestModel } from "../models/login-request.model";
import axios from "axios";
import type { RegisterRequestModel } from "../models/register-request.model";

const login = async (loginRequestModel: LoginRequestModel) => {
    // Call API to login with axios with error handling

    try {
        const response = await axios.post("http://localhost:1990/api/v1/auth/login", loginRequestModel);
        return response.data;
    } catch (error) {
        console.error("Login failed", error);
        return null;
    }
}

const register = async (registerRequestModel: RegisterRequestModel) => {
    // Call API to register with axios with error handling

    try {
        const response = await axios.post("http://localhost:1990/api/v1/auth/register", registerRequestModel);
        return response.data;
    } catch (error) {
        console.error("Registration failed", error);
        return null;
    }
}


export const authService = {
    login,
    register
}