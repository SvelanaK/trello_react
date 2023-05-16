import { MouseEvent, FormEvent } from 'react';

export type Icolumn = {
  cardsArr: CardArrType[],
  name: string,
  id: number,
}

export interface CardArrType {
  cardForm: ICard,
  columnId?: number,
  cardId?: number,
}
export interface ICard {
  [key: string]: string,
  nameColumns: string,
  nameAuthor: string,
  performing: string,
  runtime: string,
  taskComplexity: string;
};

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
  saveName(): void,
  toggleEditInput(): void,
};

export interface IModal {
  openModal?: boolean,
  toggleModal(event: MouseEvent<HTMLButtonElement> | FormEvent): void,
};

export interface ISelect {
  taskComplexity: string,
  formError: boolean,
  setTaskComplexity(param: string): void,
};
