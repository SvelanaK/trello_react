export type Icolumn = {
  name: string,
  id: number,
}

export type Istate = {
  columnsArr: Icolumn[],
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