import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

import App from './App';
import './assets/css/output.css';

const httpLink = createUploadLink({
  uri: '/api',
});

const authLink = setContext((_, { headers }) => {
  // get Token
  const jwt = JSON.parse(sessionStorage.getItem('jwt'));

  // return the headers
  return {
    headers: {
      ...headers,
      authorization: jwt ? `Bearer ${jwt.token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
