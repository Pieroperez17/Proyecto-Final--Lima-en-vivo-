import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { ThreeDot } from 'react-loading-indicators'



export const ProtectedRoutes = ({children}) => {
    const { isLoaded, isSignedIn } = useUser();
    if (!isLoaded) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <ThreeDot variant="bounce" color="#fa7725f1" size="small" text="" textColor="" />
            </div>
        );
    }
    if (!isSignedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
