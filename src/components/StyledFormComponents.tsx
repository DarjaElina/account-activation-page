import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem 2rem;
  border-radius: 0.75rem;
  border: 1px solid var(--borderLight);
  background-color: var(--card);
  font-family: inherit;
  max-width: 90%;
  box-shadow: 0px 4px 12px rgba(113, 169, 247, 0.15);

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export const Input = styled.input<{ $submit?: boolean }>`
  margin: 0 0 1.5rem 0;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background-color: ${(props) => (props.$submit ? 'var(--primary)' : '#fff')};
  color: ${(props) => (props.$submit ? '#fff' : 'var(--text)')};
  font-weight: ${(props) => (props.$submit ? '600' : '400')};
  cursor: ${(props) => (props.$submit ? 'pointer' : 'default')};
  font-family: inherit;
  font-size: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.$submit ? '#5f94e2' : '#f2f9ff'};
  }
  
  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

export const Text = styled.p`
  margin: 0 0 1.2rem 0;
  font-size: 1.1rem;
  color: var(--text);

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ErrorText = styled.p`
  margin: 0 0 1.2rem 0;
  color: var(--error);
  font-size: 0.95rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const CenteredText = styled(Text)`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const LinkText = styled(Text)`
  color: var(--primary);
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    color: #5f94e2;
  }
`;

