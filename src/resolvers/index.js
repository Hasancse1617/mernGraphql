import { userResolveMutation, userResolveQuery } from "./userResolver.js"

export const resolvers = {
    Query:{
        hasan:()=>"Hi Hello",
        ...userResolveQuery
    },
    Mutation:{
        ...userResolveMutation
    }
}