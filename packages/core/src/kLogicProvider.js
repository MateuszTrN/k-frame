import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import {assocPath} from 'ramda';
import fromTree from './fromTree';
import composeReducers from './composeReducers';

const errorMessage =
  'Please Use <KProvider> component at the top of your application.';

const printMissingKProviderError = () => console.error(errorMessage);

const defaultContextValue = {
  scope: [],
  assocReducer: printMissingKProviderError,
  dispatch: printMissingKProviderError,
  runSaga: printMissingKProviderError,
  getState: printMissingKProviderError,
  subscribe: printMissingKProviderError,
  supplied: false,
};

const KContext = createContext(defaultContextValue);

const KProvider = ({store, runSaga, staticReducer, children}) => {
  const ancestorContext = useContext(KContext);
  const [context, setContext] = useState(defaultContextValue);
  const reducersTree = useRef({});

  if (ancestorContext.supplied) {
    console.error(
      '<KProvider> already defined. Please remove redundant usage.'
    );
    return null;
  }

  const assocReducer = useCallback(
    (rPath, reducer) => {
      const newTree = assocPath(rPath, reducer, reducersTree.current);
      reducersTree.current = newTree;
      const treeReducer = fromTree(newTree);
      const finalReducer = staticReducer
        ? composeReducers(staticReducer, treeReducer)
        : treeReducer;
      store.replaceReducer(finalReducer);
    },
    [store]
  );

  const contextValue = useMemo(
    () => ({
      ...context,
      assocReducer,
      dispatch: store.dispatch,
      getState: store.getState,
      subscribe: store.subscribe,
      runSaga,
      supplied: true,
    }),
    [runSaga, assocReducer]
  );

  return <KContext.Provider value={contextValue}>{children}</KContext.Provider>;
};

export {KContext, KProvider};
