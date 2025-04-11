// src/components/StyledFormComponents.tsx
import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.3rem 0.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #252422;
  font-family: inherit;
  background-color: #fffcf2;
`;

export const Input = styled.input<{ $submit?: boolean }>`
  margin: 0 2.5rem 1.2rem 2rem;
  padding: 1rem 0.5rem 1rem;
  border: 1px solid #463f3a;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.$submit ? '#EB5E28' : '#FFF')};
  cursor: ${(props) => (props.$submit ? 'pointer' : 'default')};
  font-family: inherit;
  font-size: ${(props) => (props.$submit ? '1.2rem' : '1rem')};
`;

export const Text = styled.p`
  margin: 0 2.5rem 1.2rem 2rem;
  font-size: 1.2rem;
`;

export const ErrorText = styled.p`
  margin: 0 2.5rem 1.2rem 2rem;
  color: red;
`;
