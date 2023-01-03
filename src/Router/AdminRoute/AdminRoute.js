
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Utilitis/Spinner';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import useUserRole from '../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const [adminUser, loadingRole] = useUserRole(user?.email);
    const location = useLocation();
    if (loading || loadingRole) {
        return <Spinner />
    };
    if (user && adminUser === 'admin') {
        return children;
    };
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;