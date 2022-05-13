import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const createToken = (user, expiresToken)=>{
    return jwt.sign({user}, process.env.SECRET, {
        expiresIn: expiresToken
    });
}
export const userResolveQuery ={ 
    haaa:()=>"Hi Haaa",
    users:async()=>{
        return await User.find({});
    }
}

export const userResolveMutation ={
    addUser:async(_, {name,email,user_type,image,password})=>{
        if(!email || email === ""){
            throw new Error("Email is required");
        }
        else if(!name || name === ""){
            throw new Error("Name is required");
        }
        else if(!user_type || user_type === ""){
            throw new Error("User Type is required");
        }
        else if(!password || password === ""){
            throw new Error("Password is required");
        }
        const checkUser = await User.findOne({email});
        if(checkUser){
            throw new Error("Email is already exists")
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        try {
            const user = await User.create({
                name,
                email,
                user_type,
                image,
                password:hash
            });
            return "Hasan"
        } catch (error) {
            
        }
    },
    loginUser:async(_,{login_user})=>{
        const { email, password, remember_me } = login_user;
        // console.log(email)
        if(!email || email === ""){
            throw new Error("Email is required");
        }
        if(!password || password === ""){
            throw new Error("Password is required");
        }
        let expiresToken = '1d';
        if(remember_me){
            expiresToken = '7d';
        }

        const user = await User.findOne({email});
        
        if(user){
            const matched = await bcrypt.compare(password, user.password);
            if(matched){
                const token = createToken(user,expiresToken);
                return {msg:'You have successfully login',token};
            }else{
                throw new Error("Username or Password does not matched");
            }
        }
        else{
            throw new Error("Email not found");
        }

    }
}