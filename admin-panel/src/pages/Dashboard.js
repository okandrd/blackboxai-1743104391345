import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Container, Button, Navbar } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
const Dashboard = () => {
    const { user, logout } = useAuth();
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { bg: "dark", variant: "dark", className: "mb-4", children: _jsxs(Container, { children: [_jsx(Navbar.Brand, { href: "#home", children: "Admin Panel" }), _jsxs(Navbar.Collapse, { className: "justify-content-end", children: [_jsxs(Navbar.Text, { children: ["Signed in as: ", _jsx("span", { className: "text-white", children: user?.email })] }), _jsx(Button, { variant: "outline-light", className: "ms-3", onClick: logout, children: "Logout" })] })] }) }), _jsxs(Container, { children: [_jsx("h1", { children: "Dashboard" }), _jsxs("div", { className: "mt-4 p-5 bg-light rounded", children: [_jsx("h2", { children: "Welcome to the Admin Panel" }), _jsx("p", { children: "You have successfully authenticated and can now access all admin features." })] })] })] }));
};
export default Dashboard;
