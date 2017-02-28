const lastIdReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SUBMIT_TODO':
      return ++state;
    default:
      return state;
  }
};

export default lastIdReducer;