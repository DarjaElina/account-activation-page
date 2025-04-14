import {render } from '@testing-library/react';
import ActivationForm from './ActivationForm';
import { MockedProvider } from "@apollo/client/testing";
import { ACTIVATE_USER } from '../../graphql/mutations';
import { CHECK_ACTIVATION_TOKEN } from '../../graphql/queries';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useParams: () => ({
      token: '12345',
    }),
  };
});

const mocks = [
    
  {
    request: {
      query: CHECK_ACTIVATION_TOKEN,
      variables: {
        activationToken: '12345'
      }
    },
    result: {
      data: {
        checkActivationToken: {
          isTokenActive: true
        }
      }
    }
  },
  {
    request: {
      query: ACTIVATE_USER,
      variables: {
        activationToken: '12345',
        newPassword: 'password'
      }
    },
    result: {
      data: {
        activateUser: {
          success: true,
          message: 'Account successfully activated! Your username is testUsername'
        }
      }
    }
  },
];

const badMocks = [
  {
    request: {
      query: ACTIVATE_USER,
      variables: {
        activationToken: 'invalidToken'
      }
    },
  },
  {
    request: {
      query: CHECK_ACTIVATION_TOKEN,
      variables: {
        activationToken: 'invalidToken'
      }
    },
    result: {
      data: {
        checkActivationToken: {
          isTokenActive: false
        }
      }
    }
  }
];

describe('ActivationForm', () => {
  it('renders inputs and submit button correctly when valid token extracted from url', async () => {
    const { findByPlaceholderText, findByTestId, findByText } = render(
      <MockedProvider mocks={mocks}>
        <MemoryRouter >
          <ActivationForm/>
        </MemoryRouter>
      </MockedProvider>
    )
    
    
    expect(await findByText('Please enter your password to complete account activation process')).toBeDefined();
    expect(await findByPlaceholderText('Password')).toBeDefined();
    expect(await findByPlaceholderText('Confirm password')).toBeDefined();
    expect(await findByTestId('activationFormSubmitBtn')).toBeDefined();
  })

  it('renders "invalid token" message and resend link if the token is invalid', async () => {
    const { findByText } = render(
      <MockedProvider mocks={badMocks}>
        <MemoryRouter>
          <ActivationForm/>
        </MemoryRouter>
      </MockedProvider>
    )
    
    
    expect(await findByText('Something went wrong.')).toBeDefined();
    expect(await findByText('Resend activation email')).toBeDefined();
  })

  it('shows error messages when the fields are missing', async () => {
    const user = userEvent.setup();
    const { findByTestId, findByText } = render(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <ActivationForm/>
        </MemoryRouter>
      </MockedProvider>
    )

    await user.click(await findByTestId('activationFormSubmitBtn'));
    expect(await findByText('Password is required')).toBeDefined();
    expect(await findByText('Confirm Password is required')).toBeDefined();
  })

  it('shows error message when password do not match', async () => {
    const user = userEvent.setup();
    const { findByPlaceholderText, findByTestId, findByText } = render(
      <MockedProvider mocks={mocks}>
        <ActivationForm/>
      </MockedProvider>
    )

    await user.type(await findByPlaceholderText('Password'), 'password');
    await user.type(await findByPlaceholderText('Confirm password'), 'another password');
    await user.click(await findByTestId('activationFormSubmitBtn'));
    expect(await findByText('Passwords must match')).toBeDefined();
  })



  it('calls the activateUser mutation and displays user message and login link when correct data is submitted', async () => {
    const user = userEvent.setup();
    const { findByPlaceholderText, findByTestId, findByText } = render(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <ActivationForm/>
        </MemoryRouter>
      </MockedProvider>
    )

    await user.type(await findByPlaceholderText('Password'), 'password');
    await user.type(await findByPlaceholderText('Confirm password'), 'password');
    await user.click(await findByTestId('activationFormSubmitBtn'));
    expect(await findByText('Account successfully activated! Your username is testUsername')).toBeDefined();
    expect(await findByTestId('loginLink')).toBeDefined();
  })
})