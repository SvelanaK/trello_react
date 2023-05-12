import actionTypes from './actionTypes';

type Icolumn = {
  name: string,
  id: number,
}

type Iaction = {
  type?: string,
  payload?: Icolumn,
}

type Istate = {
  columnsArr: Icolumn[],
}

const initialState: Istate = {
  columnsArr: [],
};

function trelloReducer(state = initialState, action: Iaction = {}): Istate {
  switch (action.type) {
    case actionTypes.SET_COLUMNS: {
      return {
        ...state,
        columnsArr: action.payload ? [...state.columnsArr, {
          name: action.payload.name,
          id: action.payload.id,
        }] : [],
      };
    }
    default:
      return state;
  }
}

export default trelloReducer;
