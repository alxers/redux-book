import { createStore, applyMiddleware } from 'redux';
import rootReducers from 'reducers/root';
import logMiddleware from 'middleware/log';

export default createStore(
  rootReducers,
  applyMiddleware(logMiddleware, apiMiddleware)
);