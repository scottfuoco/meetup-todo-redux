const filterReducer = (state = 'none', action) => {
  switch (action.type) {
    case 'HANDLE_FILTER_CHANGE':
      return action.payload.value;
    default:
      return state;
  }
};

export default filterReducer;
