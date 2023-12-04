import Home from '../pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotFound from '../pages/NotFound/NotFound'
import LoginPage from '../pages/login/loginPage'
import Unauthorized from '../pages/Unauthorized/Unauthorized';
import ProtectedRoute from './ProtectedRoute';


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;