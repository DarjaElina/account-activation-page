import { useQuery } from '@apollo/client';
import { CHECK_ACTIVATION_TOKEN } from '../graphql/queries';
import { CheckActivationTokenQueryVariables } from '../../__generated__/graphql';

const useActivationToken = (variables: CheckActivationTokenQueryVariables) => {
  const { data, error, loading } = useQuery(CHECK_ACTIVATION_TOKEN, {
    variables,
  });

  return {
    isActive: data ? data.checkActivationToken : false,
    loading,
    error,
  };
};

export default useActivationToken;
