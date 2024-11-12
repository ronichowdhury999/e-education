import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth"
import AboutUs from "../Pages/AboutUs/AboutUs";
import Loading from "../Components/Loading/Loading";

const ProtectedRoute = ({ children }) => {
    const { user,loading } = useAuth();
    const locations = useLocation()
    console.log(locations);
    if(loading){
        return <Loading/>
    }
    if (user) {
        return <AboutUs />
    } else {
        return <Navigate to="/login" state={locations.pathname
        }></Navigate>
    }
}

export default ProtectedRoute