const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'DELETE_COMPLETED':
      return state.filter(todo => !todo.complete);
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
    case 'SUBMIT_TODO':
      return [...state, { id: action.payload.id , text: action.payload.input, complete: false }]
    default:
      return state;
  }
};

export default todosReducer;

