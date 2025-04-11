import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 2rem auto;
  width: 2rem;
  height: 2rem;
  border: 3px solid #ccc;
  border-top-color: #eb5e28;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export default Spinner;
