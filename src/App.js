import React from "react";
import "./App.scss";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import SideBar from "./components/Layout/SideBar";
import NavBar from "./components/Layout/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";

const client = new ApolloClient({
  uri: "https://task.api.e7kd9n9.churro.io/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <SideBar />
        <NavBar />
        <Dashboard />
      </div>
    </ApolloProvider>
  );
}

export default App;
