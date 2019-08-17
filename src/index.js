// Redux's combineReducers only works for reducers that act on different keys of the store.
// If we want to create two reducers that act on the same key, we have to use this function.
// see test case for a detailed example.
const flattenReducers = (...reducers) => (initialState = {}, action) => reducers.reduce(
  (currentState, reducer) => reducer(currentState, action),
  initialState,
)

export default flattenReducers
