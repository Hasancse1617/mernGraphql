import jwt from 'jsonwebtoken';

export const auth = ({req}) => {
    const authHeaders = req.headers['authorization'];
    const token = authHeaders.split('Bearer ')[1];
    if(token){
        const user = jwt.verify(token, process.env.SECRET);
        return {user}
    }
    return {Shala:"kkkkk"};
};