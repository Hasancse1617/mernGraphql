import { ApolloServer, gql } from "apollo-server-express";
import { 
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageGraphQLPlayground
   } from "apollo-server-core";
import express from "express";
import http from "http";
import connectDB from "./config/db.js";
connectDB();
import { typeDefs } from "./typeDefs/index.js";
import { resolvers } from "./resolvers/index.js";
import bodyParser from "body-parser";
import { auth } from "./utils/auth.js";


const app = express();
app.use(bodyParser.json());
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:auth,
    csrfPrevention: true,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        ApolloServerPluginLandingPageGraphQLPlayground
    ],
});
await server.start();
server.applyMiddleware({ app });
httpServer.listen({ port: 4000 }, ()=>{
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
