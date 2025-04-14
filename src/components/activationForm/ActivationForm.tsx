import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import useActivateUser from '../../hooks/useActivateUser';
import { useParams } from 'react-router-dom';
YupPassword(yup);
import { Form, Input, Text, ErrorText } from '../StyledFormComponents';
import { useState } from 'react';
import { ApolloError } from '@apollo/client';
import { Link } from 'react-router-dom';
import useActivationToken from '../../hooks/useActivationToken';
import Spinner from '../Spinner';

type ActivationParams = {
  token: string;
};

const schema = yup
  .object({
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const ActivationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [activateUser, { loading: activationLoading }] = useActivateUser();
  const { token } = useParams<ActivationParams>();
  const {
    isActive,
    loading: tokenLoading,
    error,
  } = useActivationToken({ activationToken: token || '' });
  const [userMessage, setUserMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const onSubmit = async (data: FormData) => {
    try {
      if (!token) {
        throw new Error('Token missing.');
      }
      const { password } = data;
      const response = await activateUser({
        activationToken: token,
        newPassword: password,
      });
      if (response?.activateUser.message)
        setUserMessage(response.activateUser.message);
      setIsSubmitted(true);
    } catch (error: unknown) {
      if (error instanceof ApolloError) {
        const message =
          error.graphQLErrors?.[0]?.message || 'Something went wrong!';
        reset();
        setUserMessage(message);
        setTimeout(() => {
          setUserMessage(null);
        }, 5000);
      }
    }
  };
  if (tokenLoading || activationLoading) return <Spinner />;
  if (error) {
    return (
      <>
        <Text>Something went wrong.</Text>
        <Link to="/">Resend activation email</Link>
      </>
    );
  }
  return (
    <>
      {isActive ? (
        <>
          <Text>{userMessage}</Text>
          {!isSubmitted && (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Text>You are almost there!</Text>
              <Text>
                Please enter your password to complete account activation
                process
              </Text>
              <Input
                placeholder="Password"
                type="password"
                {...register('password')}
              />
              <ErrorText>{errors.password?.message}</ErrorText>

              <Input
                placeholder="Confirm password"
                type="password"
                {...register('confirmPassword')}
              />
              <ErrorText>{errors.confirmPassword?.message}</ErrorText>

              <Input $submit type="submit" />
            </Form>
          )}
        </>
      ) : (
        <>
          {' '}
          <Text>Token invalid or expired</Text>{' '}
          <Link to="/">Resend activation email</Link>
        </>
      )}
      {isSubmitted && (
     <Text>
     You can log in 
      <a
        href="https://mobile-frontend--6g28mexz3f.expo.app"
        target="_blank"
        rel="noopener noreferrer"
      >here
      </a>
   </Text>
      )}
    </>
  );
};

export default ActivationForm;
