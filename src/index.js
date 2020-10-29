import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider} from 'react-jss'
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import theme from './theme'
import App from './router/AppRouter';
import reportWebVitals from './reportWebVitals';

let linkApi;
if (process.env.NODE_ENV === 'production') {
  linkApi = "";
} else {
  linkApi = "http://localhost:1337/graphql";
}

const link = new HttpLink(
  { uri: linkApi }
);

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  }),

  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphql", graphQLErrors);
    console.log("networkgraphql", networkError);
  }
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
