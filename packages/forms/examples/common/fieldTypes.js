import {actionType2, createReducer} from '@k-frame/reducers';
import {add, compose, lensProp, over} from 'ramda';
import {memo} from 'react';
import {useKReducer, withScope} from '@k-frame/core';
import React from 'react';

const counterReducer = createReducer({counter: 0}, [
  actionType2('INC', over(lensProp('counter'), add(1))),
]);

const counterActions = {
  inc: () => ({type: 'INC'}),
};

const Counter = compose(
  memo,
  withScope
)(({color}) => {
  const {counter, inc} = useKReducer(counterReducer, counterActions);
  return (
    <div>
      <div>first</div>
      <button
        style={{backgroundColor: color || 'white', color: 'white'}}
        onClick={inc}
        type="button"
      >
        {`Hopla ${counter}`}
      </button>
    </div>
  );
});

const Input = ({value, onChange, inputRef, type}) => (
  <input value={value} onChange={onChange} ref={inputRef} type={type} />
);

const fieldTypes = {
  text: Input,
  password: Input,
  email: Input,
  counter: Counter,
};

export default fieldTypes;