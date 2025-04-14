import {render, screen } from '@testing-library/react';
import ActivationForm from './ActivationForm';
import { MockedProvider } from "@apollo/client/testing";
import { ACTIVATE_USER } from '../../graphql/mutations';
const mocks = [{
  request: {
    query: ACTIVATE_USER,
    variables: {

    }
  },
  result: {
      data: {
      success: true,
      message: 'Signup link sent.'
      }
    }
}];

describe('ActivationForm', () => {
  it('renders the ActivationFormcomponent', () => {
    render(
      <MockedProvider mocks={mocks}>
        <ActivationForm/>
      </MockedProvider>
    )
    
    screen.debug();
  })
})