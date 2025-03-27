import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
const ProtectedRoute = ({ redirectPath = '/login' }) => {
    const { isAuthenticated, loading } = useAuth();
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: redirectPath, replace: true });
    }
    return _jsx(Outlet, {});
};
export default ProtectedRoute;
