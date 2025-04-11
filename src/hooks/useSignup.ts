import { useMutation } from '@apollo/client';
import { SIGNUP_REQUEST } from '../graphql/mutations';
import { UserInput } from '../../__generated__/graphql';

const useSignup = (): [
  (userInput: UserInput) => Promise<void>,
  { loading: boolean },
] => {
  const [mutate, { loading }] = useMutation(SIGNUP_REQUEST);

  const requestSignup = async (userInput: UserInput) => {
    try {
      const { data } = await mutate({
        variables: { userInput },
      });
      console.log(data);
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };
  return [requestSignup, { loading }];
};

export default useSignup;
