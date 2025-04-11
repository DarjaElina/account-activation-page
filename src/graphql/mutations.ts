import { gql } from '../../__generated__';

export const SIGNUP_REQUEST = gql(`
  mutation SignupRequest($userInput: UserInput!) {
    signupRequest(userInput: $userInput) {
      message
    }
  }
`);

export const ACTIVATE_USER = gql(`
  mutation ActivateUser($activationToken: String!, $newPassword: String!) {
    activateUser(activationToken: $activationToken, newPassword: $newPassword) {
      message
    }
  }
`);
