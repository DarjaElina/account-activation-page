import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailForm from './components/RequestSignupForm';
import ActivationForm from './components/ActivationForm';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import Test from './components/Test';

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<EmailForm />} />
            <Route path="/activate/:token" element={<ActivationForm />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
