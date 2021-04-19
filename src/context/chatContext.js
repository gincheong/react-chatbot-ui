import React, { createContext, useReducer } from 'react';
import { List, Map } from 'immutable';
import { chatReducer } from 'reducers';

export const chatContext = createContext();

const initialState = Map({
  message: List([// Map({
    //   mid: 0, 
    //   type: 'left', // ['right', 'left']
    //   text: 'test message' // string
    // })
  ]),
  mid: 0
});

// 대문자 시작하는 이름이여야 Component로 간주하네
export const ChatContextProvider = (children) => {
  return (
    <chatContext.Provider value={useReducer(chatReducer, initialState)}>
      {children}
    </chatContext.Provider>
  );
};
