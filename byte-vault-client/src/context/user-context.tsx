import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface IUserContext {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<IUserContext>({
    isLoggedIn: false,
    setIsLoggedIn: () => { },
    logout: () => { },
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/pingauth", { credentials: "include" })
            .then(res => setIsLoggedIn(res.ok))
            .catch(() => setIsLoggedIn(false));
    }, []);

    const logout = () => {
        fetch("/logout", { method: "POST", credentials: "include" }).then(() => {
            setIsLoggedIn(false);
            navigate("/");
        });
    };

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </UserContext.Provider>
    );
};
