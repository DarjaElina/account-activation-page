import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useSignup from '../../hooks/useSignup';
import { UserStatus, UserRole } from '../../../__generated__/graphql';
import { Form, Input, Text, ErrorText, LinkText, CenteredText } from './../StyledFormComponents';
import { useState } from 'react';
import { ApolloError } from '@apollo/client';
import Spinner from './../Spinner';
const schema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup
      .string()
      .email('Please enter valid email address')
      .required('Email is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const RequestSignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [signUp, { loading }] = useSignup();
  const [userMessage, setUserMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const onSubmit = async (data: FormData) => {
    try {
      const { firstName, lastName, email } = data;
      await signUp({
        givenName: firstName,
        familyName: lastName,
        email: email,
        role: UserRole.Student,
        departmentId: '62acdf6e-d19a-45bd-b72a-ae8e3ad308e2',
        status: UserStatus.Pending,
      });
      setUserMessage('Link sent successfully, please check your mailbox ✨ (and spam folder 💌)');
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
  if (loading) return <Spinner />;
  return (
    <>
      <CenteredText>{userMessage}</CenteredText>
      {!isSubmitted && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Text>
            Please fill in details below to get your account activation link
          </Text>
          <Input placeholder="First name" {...register('firstName')} />
          <ErrorText>{errors.firstName?.message}</ErrorText>

          <Input placeholder="Last name" {...register('lastName')} />
          <ErrorText>{errors.lastName?.message}</ErrorText>

          <Input placeholder="Email" {...register('email')} />
          <ErrorText>{errors.email?.message}</ErrorText>

          <Input $submit type="submit" data-testid="submitBtn" />
        </Form>
      )}
      {isSubmitted && <LinkText onClick={() => window.location.reload()}>Resend activation email</LinkText>}
    </>
  );
};

export default RequestSignupForm;
