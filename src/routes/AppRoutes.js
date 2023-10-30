import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound'


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;