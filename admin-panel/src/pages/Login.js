import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button, Form, Container, Alert } from 'react-bootstrap';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/dashboard');
        }
        catch (err) {
            setError('Failed to log in');
            console.error(err);
        }
        setLoading(false);
    };
    return (_jsx(Container, { className: "d-flex align-items-center justify-content-center", style: { minHeight: '100vh' }, children: _jsxs("div", { className: "w-100", style: { maxWidth: '400px' }, children: [_jsx("h2", { className: "text-center mb-4", children: "Admin Login" }), error && _jsx(Alert, { variant: "danger", children: error }), _jsxs(Form, { onSubmit: handleSubmit, children: [_jsxs(Form.Group, { className: "mb-3", controlId: "formEmail", children: [_jsx(Form.Label, { children: "Email address" }), _jsx(Form.Control, { type: "email", placeholder: "Enter email", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs(Form.Group, { className: "mb-3", controlId: "formPassword", children: [_jsx(Form.Label, { children: "Password" }), _jsx(Form.Control, { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsx(Button, { variant: "primary", type: "submit", className: "w-100", disabled: loading, children: loading ? 'Logging in...' : 'Login' })] })] }) }));
};
export default Login;
