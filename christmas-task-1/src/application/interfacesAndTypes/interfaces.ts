import { type } from "os";
import Control from "../../common/_control";

export interface IDataItem {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export interface IFilter {
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
  quantity: number;
  year: number;
  sorted: string;
  search: string;
}
export interface IFilters {
  shape: {'ball': string, 'bell': string, 'cone': string, 'snowflake': string, 'figurine': string};
  color: {'white': string, 'yellow': string, 'red': string, 'blue': string, 'green': string};
  size: {'big': string, 'average': string, 'small': string};
  favorite: boolean;
  quantity: number;
  year: {'minYear': number, 'maxYear': number};
  sorted: {'sortByNameUp': boolean, 'sortByNameDown': boolean, 'sortByQuantityUp': boolean, 'sortByQuantityDown': boolean};
  search: string;
}
export interface IFiltersShape {
  shape: {'ball': string, 'bell': string, 'cone': string, 'snowflake': string, 'figurine': string};
}
export interface IFiltersColor {
  color: {'white': string, 'yellow': string, 'red': string, 'blue': string, 'green': string};
}
export interface IFiltersSize {
  size: {'big': string, 'average': string, 'small': string};
}

// export type NodeType extends = Control{
//   // node: NodeType;
// }