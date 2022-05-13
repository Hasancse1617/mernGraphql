export const userQueryType = `
    hasan: String
    haaa: String
    users: [User]
`
export const userType = `
    input loginInput{
        email:String
        password:String
        remember_me:Boolean
    }
    type LoginReturn{
        msg:String,
        token:String
    }
    type User{
        _id:ID 
        name:String
        email:String
        user_type:String
        image:String    
        password:String    
    }
`
export const userMutationType = `
    addUser(name:String!,email:String!,user_type:String!,image:String!,password:String!):String
    loginUser(login_user:loginInput):LoginReturn
`