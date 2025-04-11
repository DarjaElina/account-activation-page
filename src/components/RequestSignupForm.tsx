import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useSignup from '../hooks/useSignup';
import { UserStatus, UserRole } from '../../__generated__/graphql';
import { Form, Input, Text, ErrorText } from './StyledFormComponents';
import { useState } from 'react';
import { ApolloError } from '@apollo/client';

const schema = yup
  .object({
    firstName: yup.string().required('This field is required'),
    lastName: yup.string().required('This field is required'),
    email: yup
      .string()
      .email('Please enter valid email address')
      .required('This field is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const RequestSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [signUp, { loading }] = useSignup();
  const [userMessage, setUserMessage] = useState<string | null>(null);
  const onSubmit = async (data: FormData) => {
    try {
      const { firstName, lastName, email } = data;
      await signUp({
        givenName: firstName,
        familyName: lastName,
        email: email,
        role: UserRole.Student,
        departmentId: 'a1e854ce-e2b8-46f6-b4b5-14a1905bf8f7',
        status: UserStatus.Pending,
      });
      setUserMessage('Link sent successfully, please check your mailbox :)');
      setTimeout(() => {
        setUserMessage(null);
      }, 5000);
    } catch (error: unknown) {
      if (error instanceof ApolloError) {
        const message =
          error.graphQLErrors?.[0]?.message || 'Something went wrong!';
        setUserMessage(message);
        setTimeout(() => {
          setUserMessage(null);
        }, 5000);
      }
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <Text>{userMessage}</Text>
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

        <Input $submit type="submit" />
      </Form>
    </>
  );
};

export default RequestSignupForm;
