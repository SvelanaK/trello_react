import actionTypes from './actionTypes';

export function setColumns(payload?: unknown) {
  return {
    type: actionTypes.SET_COLUMNS,
    payload,
  };
};

export function setCurrentColumnId(payload?: unknown) {
  return {
    type: actionTypes.SET_CURRENT_COLUMN_ID,
    payload,
  };
};