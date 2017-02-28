export const handleFilterChange = value => ({
  type: 'HANDLE_FILTER_CHANGE',
  payload: {
    value
  }
})

export const deleteCompleted = () => ({
  type: 'DELETE_COMPLETED',
})
