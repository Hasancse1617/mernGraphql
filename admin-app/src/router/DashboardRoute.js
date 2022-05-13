import { Route, Routes as Switch } from "react-router-dom"
import Dashboard from "../components/layouts/Dashboard";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import Footer from "../components/layouts/Footer";
import UserRoute from "../components/user/UserRoute";
import PrivateRoute from "./PrivateRoute";
// import CategoryRoute from "../components/category/CategoryRoute";
// import ProductRoute from "../components/product/ProductRoute";
// import PostRoute from "../components/post/PostRoute";
// import CouponRoute from "../components/coupon/CouponRoute";
// import BannerRoute from "../components/banner/BannerRoute";
// import OrderRoute from "../components/order/OrderRoute";

const DashboardRoute = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <Switch>
                <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
                <Route path="/user/*" element={<PrivateRoute><UserRoute/></PrivateRoute>}></Route>
                {/* <Route path={`${path}/banner`} component={BannerRoute}></Route>
                <Route path={`${path}/category`} component={CategoryRoute}></Route>
                <Route path={`${path}/product`} component={ProductRoute}></Route>
                <Route path={`${path}/order`} component={OrderRoute}></Route>
                <Route path={`${path}/post`} component={PostRoute}></Route>
                <Route path={`${path}/coupon`} component={CouponRoute}></Route> */}
            </Switch>
            <Footer/>
        </>
    );
}

export default DashboardRoute;