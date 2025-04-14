import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailForm from './components/requestSignupForm/RequestSignupForm';
import ActivationForm from './components/activationForm/ActivationForm';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<EmailForm />} />
            <Route path="/activate/:token" element={<ActivationForm />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
