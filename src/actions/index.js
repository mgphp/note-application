let nextNoteId = 0
export const addTodo = text => ({
  type: 'ADD_NOTE',
  id: nextNoteId++,
  text
})
