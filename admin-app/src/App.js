import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const token = localStorage.getItem("token");
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  headers:{
    authorization: token ? `Bearer ${token}` : ""
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="wrapper">
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
