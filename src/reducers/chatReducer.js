import { Map } from 'immutable';
import { ACTION_TYPE } from 'actions';

export const chatReducer = (state, action) => {
  const message = state.get('message');
  const mid = state.get('mid');

  switch (action.type) {
    case ACTION_TYPE.ADD_MESSAGE:
      return state.set('message', message.push(Map({
        mid: mid + 1,
        type: action.payload.type,
        text: action.payload.text
      }))).set('mid', mid + 1);

    default:
      return state;
  }
};
