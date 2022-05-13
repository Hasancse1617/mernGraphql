import { Route, Routes as Switch } from "react-router-dom"
// import AddRole from "./AddRole";
import AddUser from "./AddUser";
import AllUser from "./AllUser";
// import EditRole from "./EditRole";
// import Roles from "./Roles";
import UpdatePassword from "./UpdatePassword";
import UpdateProfile from "./UpdateProfile";


const UserRoute = () => {
    return (
        <>
            <Switch>
                <Route path="/all" element={<AllUser/>}></Route>
                <Route path="/create" element={<AddUser/>}></Route>
                <Route path="/update-profile/:id" element={<UpdateProfile/>}></Route>
                <Route path="/update-password/:id" element={<UpdatePassword/>}></Route>
                {/* <Route path="/roles-permission" element={<Roles/>}></Route>
                <Route path="/add-role-permission" element={<AddRole/>}></Route>
                <Route path="/edit-role-permission/:id" element={<EditRole/>}></Route> */}
            </Switch>
        </>
    );
}

export default UserRoute;