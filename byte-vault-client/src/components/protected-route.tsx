import React, { type ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/user-context";

interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isLoggedIn } = useContext(UserContext);

    if (!isLoggedIn) {
        // Nu e logat, redirecționează către Home
        return <Navigate to="/" replace />;
    }

    // E logat, afișează conținutul
    return <>{children}</>;
};
