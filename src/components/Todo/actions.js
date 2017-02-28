export const toggleComplete = id => ({
  type: 'TOGGLE_COMPLETE',
  payload: {
    id
  }
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  payload: {
    id
  }
})
