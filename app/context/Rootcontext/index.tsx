import React, { useEffect } from 'react';
import dispatcher from './dispatcher';
import { reducer, IRootContextProps } from './reducers';
import { initialState } from './initialState';
import { GET_PERSISTED_CONTEXT } from './actions/types';
import * as Actions from './actions';
import LoadingAnimated from '../../components/loaders/Activity';

const RootContext = React.createContext<IRootContextProps>({ state: initialState });

const RootContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  if (!dispatcher.isReady) {
    dispatcher.isReady = true;
    dispatcher.dispatch = async params => dispatch(params);
    Object.freeze(dispatcher);
  }
  const firstUpdate = React.useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      dispatch({ type: GET_PERSISTED_CONTEXT });
    }
  }, []);

  if (!state.isReady) return <LoadingAnimated />;

  return <RootContext.Provider value={value}>{props.children}</RootContext.Provider>;
};

const RootContextConsumer = RootContext.Consumer;
export { RootContext, RootContextProvider, RootContextConsumer, dispatcher, Actions };
