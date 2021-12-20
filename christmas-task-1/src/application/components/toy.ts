import { IDataItem, IFilters } from '../interfacesAndTypes/interfaces';
import { data } from '../../assets/data';

export default class Toy implements IDataItem {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
  arrayFilteredToys: Array<IDataItem>;

  // constructor() {
  constructor(data: IDataItem) {
    this.num = data.num;
    this.name = data.name;
    this.count = data.count;
    this.year = data.year;
    this.shape = data.shape;
    this.color = data.color;
    this.size = data.size;
    this.favorite = data.favorite;
  }

  public clone() {
    return new Toy(this);
  }

  public applyFilters(_filterState: IFilters) {
    // const filteredToy = new Toy(this);
    const arrayFullList = this.fullList();
    arrayFullList.forEach(el => {
      if(this.filterByShape(el, _filterState) &&
      this.filterByColor(el, _filterState) &&
      this.filterBySize(el, _filterState) &&
      this.filterByFavorite (el, _filterState) &&
      this.filterByQuantity(el, _filterState) &&
      this.filterByYear(el, _filterState) &&
      this.filterBySearch(el, _filterState) 
      ) {
        this.arrayFilteredToys.push(this.clone());
      }
    });
      this.filterBySort(this.arrayFilteredToys, _filterState)

    return this.arrayFilteredToys;
  }

  public fullList(): Array<IDataItem> {
    return data;
  }

  private filterByShape(item: IDataItem, _filterState: IFilters) {
    if (
      item.shape == _filterState.shape.ball ||
      item.shape == _filterState.shape.bell ||
      item.shape == _filterState.shape.cone ||
      item.shape == _filterState.shape.figurine ||
      item.shape == _filterState.shape.snowflake
      ) return true;

      return false;
  }

  private filterByColor(item: IDataItem, _filterState: IFilters) {
    if (
      item.color == _filterState.color.blue ||
      item.color == _filterState.color.green ||
      item.color == _filterState.color.red ||
      item.color == _filterState.color.white ||
      item.color == _filterState.color.yellow
      ) return true;

      return false;
  }

  private filterBySize(item: IDataItem, _filterState: IFilters) {
    if (
      item.size == _filterState.size.average ||
      item.size == _filterState.size.big ||
      item.size == _filterState.size.small
      ) return true;

      return false;
  }

  private filterByFavorite(item: IDataItem, _filterState: IFilters) {
    if (
      item.favorite == _filterState.favorite
      ) return true;

      return false;
  }

  private filterByQuantity(item: IDataItem, _filterState: IFilters) {
    if (
      Number(item.count) <= _filterState.quantity
      ) return true;

      return false;
  }

  private filterByYear(item: IDataItem, _filterState: IFilters) {
    if (
      item.year == _filterState.shape.ball ||
      item.year == _filterState.shape.bell ||
      item.year == _filterState.shape.cone ||
      item.shape == _filterState.shape.figurine ||
      item.shape == _filterState.shape.snowflake
      ) return true;

      return false;
  }


  private filterBySearch(item: IDataItem, _filterState: IFilters) {
    if (
      item.name.includes(_filterState.search)
      ) return true;

      return false;
  }

  private filterBySort(arrayFilteredToys: Array<IDataItem>, _filterState: IFilters) {
    if(_filterState.sorted.sortByNameUp) {
      arrayFilteredToys.sort(function(a, b) {
        let nameA = a.name;
        let nameB = b.name;
        if(nameA < nameB) return -1;
        if(nameA > nameB) return 1;
        return 0;
      })
    } else if(_filterState.sorted.sortByNameDown) {
      arrayFilteredToys.sort(function(a, b) {
        let nameA = a.name;
        let nameB = b.name;
        if(nameA > nameB) return -1;
        if(nameA < nameB) return 1;
        return 0;
      })
    } else if(_filterState.sorted.sortByQuantityUp) {
      arrayFilteredToys.sort(function(a, b) {
        if(a.count > b.count) return -1;
        if(a.count < b.count) return 1;
        return 0;
      })
    } else if(_filterState.sorted.sortByQuantityUp) {
      arrayFilteredToys.sort(function(a, b) {
        if(a.count < b.count) return -1;
        if(a.count > b.count) return 1;
        return 0;
      })
    }
  }
}