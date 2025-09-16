import { createContext, useEffect, useState, type ReactNode } from "react";
import type { LoginResponseModel } from "../models/login-response.model";
import type { UserInformationViewModel } from "../view-models/user-infomation.view-model";
import React from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    userInformation: UserInformationViewModel | null;
    login: (data: LoginResponseModel) => void;
    logout: () => void;
    register: (data: LoginResponseModel) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userInformation, setUserInformation] = useState<UserInformationViewModel | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const login = (data: LoginResponseModel) => {
        if (data && data.token) {
            localStorage.setItem("token", data.token);
            const userInformation: UserInformationViewModel = JSON.parse(data.userInformation);
            localStorage.setItem("userInformation", JSON.stringify(userInformation));
            setIsAuthenticated(true);
            setUserInformation(userInformation);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInformation");
        setIsAuthenticated(false);
        setUserInformation(null);
    };

    const register = (data: LoginResponseModel) => {
        if (data && data.token) {
            localStorage.setItem("token", data.token);
            const userInformation: UserInformationViewModel = JSON.parse(data.userInformation);
            localStorage.setItem("userInformation", JSON.stringify(userInformation));
            setIsAuthenticated(true);
            setUserInformation(userInformation);
        }
    };

    const providerValue = {
        isAuthenticated,
        userInformation,
        login,
        logout,
        register
    };

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): AuthContextType => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}