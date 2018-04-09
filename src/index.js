import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_GRAPHQL_URI,
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
  connectToDevTools: process.env.NODE_ENV === 'development',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
