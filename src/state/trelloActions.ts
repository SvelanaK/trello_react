import actionTypes from './actionTypes';

export function setColumns(payload?: unknown) {
  return {
    type: actionTypes.SET_COLUMNS,
    payload,
  };
};
