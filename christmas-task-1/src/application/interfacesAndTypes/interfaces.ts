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

export interface IFilters {
  form: string;
  color: string;
  size: string;
  favorite: boolean;
  quantity: number;
  year: number;
  sortBy: string;
  searchFor: string;
}
