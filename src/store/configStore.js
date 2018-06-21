import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../app/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
  );
}
