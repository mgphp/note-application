import types from '../actions/actionTypes';

const notes = (state = [], action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default notes;