const todoInputReducer = (state = '', action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE':
      return action.payload.value;
    case 'SUBMIT_TODO':
      return '';
    default:
      return state;
  }
};

export default todoInputReducer;

