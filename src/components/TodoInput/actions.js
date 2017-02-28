export const handleInputChange = value => ({
  type: 'HANDLE_INPUT_CHANGE',
  payload: {
    value
  }
})

export const submitTodo = (input, id) => ({
  type: 'SUBMIT_TODO',
  payload: {
    id,
    input
  }
})