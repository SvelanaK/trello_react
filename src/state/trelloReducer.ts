import actionTypes from './actionTypes';
import { Icolumn, Istate } from '../IProjectTypes';

type Iaction = {
  type?: string,
  payload?: Icolumn,
}

const initialState: Istate = {
  columnsArr: [],
  currentColumnId: null,
};

function trelloReducer(state = initialState, action: Iaction = {}): Istate {
  switch (action.type) {
    case actionTypes.SET_COLUMNS: {
      return {
        ...state,
        columnsArr: action.payload ? [...state.columnsArr, {
          cardsArr: action.payload.cardsArr,
          name: action.payload.name,
          id: action.payload.id,
        }] : [],
      };
    }

    case actionTypes.SET_CURRENT_COLUMN_ID: {
      return {
        ...state,
        currentColumnId: action.payload.id,
      };
    }

    default:
      return state;
  }
}

export default trelloReducer;
