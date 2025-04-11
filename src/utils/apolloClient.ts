import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://backend-rough-wildflower-6075.fly.dev/',
  cache: new InMemoryCache(),
});

export default client;
