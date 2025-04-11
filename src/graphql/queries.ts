import { gql } from '../../__generated__';

export const CHECK_ACTIVATION_TOKEN = gql(`
  query CheckActivationToken($activationToken: String!) {
    checkActivationToken(activationToken: $activationToken)
  }
`);
