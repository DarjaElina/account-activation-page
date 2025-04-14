import {render } from '@testing-library/react';
import RequestSignupForm from './RequestSignupForm';
import { MockedProvider } from "@apollo/client/testing";
import { SIGNUP_REQUEST } from '../../graphql/mutations';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

const mocks = [
  {
    request: {
    query: SIGNUP_REQUEST,
    variables: {
     userInput: {
      givenName: 'Anna',
      familyName: 'Smith',
      email: 'anna.smith@example.com',
      role: 'STUDENT',
      departmentId: '62acdf6e-d19a-45bd-b72a-ae8e3ad308e2',
      status: 'PENDING'
     }
    }
  },
  result: {
      data: {
        signupRequest: {
          success: true,
          message: 'Signup link sent!'
        }
      }
    }
  }
];

const errorMocks = [
  {
    request: {
      query: SIGNUP_REQUEST,
      variables: {
       userInput: {
        givenName: 'Anna',
        familyName: 'Smith',
        email: 'anna.smith@example.com',
        role: 'STUDENT',
        departmentId: '62acdf6e-d19a-45bd-b72a-ae8e3ad308e2',
        status: 'PENDING'
       }
      }
    },
    error: new Error('Internal server error'),
  }
];

describe('RequestSignupForm', () => {
  it('renders inputs and submit button correctly', async () => {
    const { findByPlaceholderText, findByTestId } = render(
      <MockedProvider mocks={mocks}>
        <RequestSignupForm/>
      </MockedProvider>
    )
    
    expect(await findByPlaceholderText('First name')).toBeDefined();
    expect(await findByPlaceholderText('Last name')).toBeDefined();
    expect(await findByPlaceholderText('Email')).toBeDefined();
    expect(await findByTestId('submitBtn')).toBeDefined();
  })

  it('shows error messages when the fields are missing', async () => {
    const user = userEvent.setup();
    const { findByTestId, findByText } = render(
      <MockedProvider mocks={mocks}>
        <RequestSignupForm/>
      </MockedProvider>
    )

    await user.click(await findByTestId('submitBtn'));
    expect(await findByText('First name is required')).toBeDefined();
    expect(await findByText('Last name is required')).toBeDefined();
    expect(await findByText('Email is required')).toBeDefined();
  })

  it('shows error message for incorrect email format', async () => {
    const user = userEvent.setup();
    const { findByPlaceholderText, findByTestId, findByText } = render(
      <MockedProvider mocks={mocks}>
        <RequestSignupForm/>
      </MockedProvider>
    )

    await user.type(await findByPlaceholderText('Email'), 'incorrect email');
    await user.click(await findByTestId('submitBtn'));
    expect(await findByText('Please enter valid email address')).toBeDefined();
  })

  it('calls the signupRequest and displays user message and resend link when correct data is submitted', async () => {
    const user = userEvent.setup();
    const { findByPlaceholderText, findByTestId, findByText } = render(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <RequestSignupForm/>
        </MemoryRouter>
      </MockedProvider>
    )

    await user.type(await findByPlaceholderText('First name'), 'Anna');
    await user.type(await findByPlaceholderText('Last name'), 'Smith');
    await user.type(await findByPlaceholderText('Email'), 'anna.smith@example.com');
    await user.click(await findByTestId('submitBtn'));
    expect(await findByText('Link sent successfully, please check your mailbox ✨ (and spam folder 💌)')).toBeDefined();
    expect(await findByText('Resend activation email')).toBeDefined();
  })

  it('shows a generic error message on server failure', async () => {
    const user = userEvent.setup();
    const { findByPlaceholderText, findByTestId, findByText } = render(
      <MockedProvider mocks={errorMocks}>
        <MemoryRouter>
          <RequestSignupForm />
        </MemoryRouter>
      </MockedProvider>
    );
  
    await user.type(await findByPlaceholderText('First name'), 'Anna');
    await user.type(await findByPlaceholderText('Last name'), 'Smith');
    await user.type(await findByPlaceholderText('Email'), 'anna.smith@example.com');
    await user.click(await findByTestId('submitBtn'));
  
    expect(await findByText('Something went wrong!')).toBeDefined();
  });
})