import { Navigate as Redirect } from 'react-router-dom';

const RouteLink = ({children}) => {
    const token = localStorage.getItem("token");
    console.log("Hasan",token);
    return token?( <Redirect to="/admin/dashboard" replace />) : children;
}
export default RouteLink;