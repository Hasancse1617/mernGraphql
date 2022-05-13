import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login_user($login_user:loginInput){
        loginUser(login_user:$login_user){
            msg
            token
        }
    } 
`