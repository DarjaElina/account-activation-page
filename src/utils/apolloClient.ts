import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://winter-water-9193.fly.dev',
  cache: new InMemoryCache(),
});

export default client;
