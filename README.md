# Flatten Reducers

**Combine Same Level Reducers Into a Single Function** ✨

# Example
```
import { createStore } from 'redux'
import flattenReducers from 'flatten-reducers'

const initial_state = {
  first_name: 'Glenn',
  last_name: 'Stovall',
}

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

const store = createStore(
  flattenReducers(
    firstNameReducer,
    lastNameReducer
  ),
  initial_state
)
```

# Installation
`yarn add flatten-reducers`


# License

MIT © Glenn Stovall
