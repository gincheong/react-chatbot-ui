export const ACTION_TYPE = {
  ADD_MESSAGE: '@REACT_CHATBOT_UI/ADD_MESSAGE'
};

export const addMessage = ({ type, text }) => {
  return {
    type: ACTION_TYPE.ADD_MESSAGE,
    payload: { type, text }
  };
};
