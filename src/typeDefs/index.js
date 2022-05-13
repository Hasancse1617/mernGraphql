import { gql } from "apollo-server-express";
import { userType, userQueryType, userMutationType } from "./userTypeDefs.js";
// console.log(userType)
export const typeDefs = gql`
    ${userType}
    type Query{
       ${userQueryType}
    }
    type Mutation{
        ${userMutationType}
    }
`