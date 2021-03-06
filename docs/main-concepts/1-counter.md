---
id: counter
title: Counter
---

Hello World doesn't make any sense in k-frame, because it is just a static text.
The simplest k-frame example is a Counter.

<!--DOCUSAURUS_CODE_TABS-->
<!--Plain JS-->

```js
import React from 'react';
import {
  useKReducer,
  withScope,
  createReducer,
  createStateReducer,
  createAction,
} from '@k-frame/core';

const counterActions = {
  inc: createAction('INC'),
};

const counterReducer = createReducer({counter: 0}, [
  createStateReducer(counterActions.inc, s => ({...s, counter: s.counter + 1})),
]);

const Counter = withScope(() => {
  const {counter, inc} = useKReducer(counterReducer, counterActions);

  return (
    <button type="button" onClick={inc}>
      Clicked {counter} times
    </button>
  );
});
```

<!--With ramda-->

```js
import React from 'react';
import {
  useKReducer,
  withScope,
  createReducer,
  createStateReducer,
  createAction,
} from '@k-frame/core';

const counterActions = {
  inc: createAction('INC'),
};

const counterReducer = createReducer({counter: 0}, [
  createStateReducer(counterActions.inc, over(lensProp('counter'), add(1))),
]);

const Counter = withScope(() => {
  const {counter, inc} = useKReducer(counterReducer, counterActions);

  return (
    <button type="button" onClick={inc}>
      Clicked {counter} times
    </button>
  );
});
```

<!--switch reducer-->

```js
import React from 'react';
import {
  useKReducer,
  withScope,
  createReducer,
  createStateReducer,
  createAction,
} from '@k-frame/core';

const counterActions = {
  inc: createAction('INC'),
};

const initialState = {counter: 0};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

const Counter = withScope(() => {
  const {counter, inc} = useKReducer(counterReducer, counterActions);

  return (
    <button type="button" onClick={inc}>
      Clicked {counter} times
    </button>
  );
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
