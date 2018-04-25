import types from './actionTypes';

export const addNOTE = text => ({
  type: types.ADD_NOTE,
  body,
});

export const editNOTE = (id, text) => ({
  type: types.EDIT_NOTE,
  id,
  body,
});

export const removeNOTE = (id, text) => ({
  type: types.REMOVE_NOTE,
  id,
});

export const completeNOTE = id => ({
  type: types.COMPLETE_NOTE,
  id,
});

export const completeAll = id => ({
  type: types.COMPLETE_ALL,
});

export const removeCompleted = id => ({
  type: types.REMOVE_COMPLETED,
});