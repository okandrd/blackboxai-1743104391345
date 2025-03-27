import axios from 'axios';
import jwt from 'jsonwebtoken';
const API_URL = '/api/auth';
export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
        return response.data;
    }
    throw new Error('Authentication failed');
};
export const verifyToken = async (token) => {
    try {
        const response = await axios.post(`${API_URL}/verify`, { token });
        return response.data;
    }
    catch (error) {
        throw new Error('Token verification failed');
    }
};
export const refreshToken = async (token) => {
    try {
        const response = await axios.post(`${API_URL}/refresh`, { token });
        return response.data;
    }
    catch (error) {
        throw new Error('Token refresh failed');
    }
};
export const decodeToken = (token) => {
    try {
        return jwt.decode(token);
    }
    catch (error) {
        return null;
    }
};
export const isTokenExpired = (token) => {
    const decoded = decodeToken(token);
    if (!decoded || typeof decoded === 'string')
        return true;
    return decoded.exp ? decoded.exp * 1000 < Date.now() : true;
};
