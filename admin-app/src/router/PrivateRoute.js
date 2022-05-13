import { Navigate as Redirect } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token");
    console.log("Hasan",token);
    return token? children : (<Redirect to="/admin/login" replace/>);
}

export default PrivateRoute;