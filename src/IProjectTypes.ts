import { MouseEvent, FormEvent } from 'react';

export type Icolumn = {
  cardsArr: CardArrType[],
  name: string,
  id: number,
}

export interface CardProps extends CardArrType {
    updateState: IFunction,
}
export interface CardArrType {
  cardForm: ICard,
  columnId?: number,
  cardId?: number,
}
export interface ICard {
  [key: string]: string | number;
  nameColumns: string;
  nameAuthor: string;
  performing: string;
  hours: number;
  taskComplexity: string; 
}

export type Istate = {
  columnsArr: Icolumn[],
  currentColumnId: number | null,
}

export type IFunction = () => void;

export interface IColumnItem {
  item: Icolumn,
  updateState: IFunction,
};

export interface IEditForm {
  inputValue: string,
  setValue(param: string): void,
  saveName: IFunction,
  toggleEditInput: IFunction,
};

export interface IModal {
  card?: ICard,
  openModal?: boolean,
  mark?: string,
  toggleModal(event: MouseEvent<HTMLButtonElement> | FormEvent): void,
};

export interface ISelect {
  defaultValue: string,
  taskComplexity: string,
  formError: boolean,
  setTaskComplexity(param: string): void,
};
