
import { assert } from 'chai';

import flattenReducers from '../src';

describe('Awesome test.', () => {
  it('given two reducers, returns a reducer that handle actions of both', () => {
    const firstNameReducer = (state = {}, action) => {
      switch (action.type) {
        case 'UPDATE_FIRST_NAME':
          return {
            ...state,
            first_name: action.payload,
          };
        default:
          return state
      }
    }

    const lastNameReducer = (state = {}, action) => {
      switch (action.type) {
        case 'UPDATE_LAST_NAME':
          return {
            ...state,
            last_name: action.payload,
          };
        default:
          return state
      }
    };

    const startingState = {
      first_name: 'Ashley',
      last_name: 'Kennedy',
    };

    const changeFirstName = { type: 'UPDATE_FIRST_NAME', payload: 'Ashleigh' }
    const changeLastName = { type: 'UPDATE_LAST_NAME', payload: 'Kennedeigh' }

    let expectedStore = startingState
    expectedStore = firstNameReducer(expectedStore, changeFirstName)
    expectedStore = lastNameReducer(expectedStore, changeLastName)

    const flatReducer = flattenReducers(firstNameReducer, lastNameReducer)

    let actualStore = startingState
    actualStore = flatReducer(actualStore, changeFirstName)
    actualStore = flatReducer(actualStore, changeLastName)

    assert(actualStore.first_name === expectedStore.first_name, 'first names are equal')
    assert(actualStore.last_name === expectedStore.last_name, 'last names are equal')
  });
});
