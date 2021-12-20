import { IFilters, 
  IFiltersShape, 
  IFiltersColor, 
  IFiltersSize,
} from '../interfacesAndTypes/interfaces';

export const filterInit: IFilters = {
  'shape': { 'ball': 'шар', 'bell': 'колокольчик', 'cone': 'шишка', 'snowflake': 'снежинка', 'figurine': 'фигурка' },
  'color': { 'white': 'белый', 'yellow': 'желтый', 'red': 'красный', 'blue': 'синий', 'green': 'зелёный' },
  'size': { 'big': 'большой', 'average': 'средний', 'small': 'малый' },
  'favorite': false,
  'quantity': 12,
  'year': { 'minYear': 1940, 'maxYear': 2020 },
  'sorted': { 'sortByNameUp': false, 'sortByNameDown': false, 'sortByQuantityUp': false, 'sortByQuantityDown': false },
  'search': '',
};

export const filterReverseShape: IFiltersShape = {
  'shape': { 'ball': '', 'bell': '', 'cone': '', 'snowflake': '', 'figurine': '' },
};

export const filterReverseColor: IFiltersColor = {
  'color': { 'white': '', 'yellow': '', 'red': '', 'blue': '', 'green': '' },
};
export const filterReverseSize: IFiltersSize = {
  'size': { 'big': '', 'average': '', 'small': '' },
};