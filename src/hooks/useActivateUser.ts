import { useMutation } from '@apollo/client';
import { ACTIVATE_USER } from '../graphql/mutations';
import { ActivateUserMutation } from '../../__generated__/graphql';

interface ActivateUserInput {
  activationToken: string;
  newPassword: string;
}

const useActivateUser = (): [
  ({
    activationToken,
    newPassword,
  }: ActivateUserInput) => Promise<ActivateUserMutation | null | undefined>,
  { loading: boolean },
] => {
  const [mutate, { loading }] = useMutation(ACTIVATE_USER);

  const activateUser = async ({
    activationToken,
    newPassword,
  }: ActivateUserInput) => {
    try {
      const { data } = await mutate({
        variables: { activationToken, newPassword },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return [activateUser, { loading }];
};

export default useActivateUser;
