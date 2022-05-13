import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
    query get_all_users{
        users{
            _id
            name
            user_type
            image
            email
         }
    }
`