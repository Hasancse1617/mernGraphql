import { Route, Routes as Switch, Navigate as Redirect } from "react-router-dom";
import ForgotPassword from "../components/auth/ForgotPassword";
import Login from "../components/auth/Login";
import ResetPassword from "../components/auth/ResetPassword";
import DashboardRoute from "./DashboardRoute";
import RouteLink from "./RouteLink";

const Router = () =>{
    const token = localStorage.getItem("token");
    return(
        <>
           <Switch>
               <Route path="/admin" element={token?<Redirect to="/admin/dashboard" replace /> : <Redirect to="/admin/login" replace/>}></Route>
               <Route path="/admin/login" element={<RouteLink><Login/></RouteLink>}></Route>
               <Route path="/admin/forgot-password" element={<RouteLink><ForgotPassword/></RouteLink>}></Route>
               <Route path="/admin/reset-password/:token" element={<RouteLink><ResetPassword/></RouteLink>}></Route>
               <Route path="/admin/*" element={<DashboardRoute/>}></Route>
           </Switch>
        </>
    )
}
export default Router;