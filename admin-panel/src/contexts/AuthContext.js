import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            try {
                const decoded = jwt.decode(storedToken);
                if (decoded && typeof decoded !== 'string') {
                    if (decoded.exp && decoded.exp * 1000 > Date.now()) {
                        setToken(storedToken);
                        setUser(decoded);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
                    }
                    else {
                        localStorage.removeItem('token');
                    }
                }
            }
            catch (err) {
                localStorage.removeItem('token');
            }
        }
        setLoading(false);
    }, []);
    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setToken(token);
            const decoded = jwt.decode(token);
            setUser(decoded);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        catch (error) {
            throw error;
        }
    };
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        delete axios.defaults.headers.common['Authorization'];
    };
    const value = {
        token,
        user,
        isAuthenticated: !!token,
        login,
        logout,
        loading
    };
    return _jsx(AuthContext.Provider, { value: value, children: children });
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
