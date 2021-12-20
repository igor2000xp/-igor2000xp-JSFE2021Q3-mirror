import { ALL_EVENTS } from '../../constants';
import EventBus from '../utils/event-bus';
import { IFilters } from '../../application/interfacesAndTypes/interfaces';
import Toy from '../../application/components/toy';
import { filterInit } from '../../application/components/filterInit';
import { data } from '../../assets/data';


export const ON_FILTER_CHANGE = 'ON_FILTER_CHANGE';

export default class State {
  private _filterNewOnly = true;

  // private _currentCategory: string = 'educational';
  
  private _page = '';
  // private _filterByData: Date = new Date();
  
  public _filterState: IFilters = filterInit;
  
  private _eventBus = new EventBus();
  
  private _toy = new Toy(data[0]);
  
  private _toysList: Toy[] = [];
  
  private _filteredToysList: Toy[] = [];
  // private currentRoute: string;

  public init() {
    this.loadFilterState();
    this._eventBus.subscribe(ALL_EVENTS, this.save.bind(this));
  }

  // private load() {
  //   this._filterState = JSON.parse(window.localStorage.getItem('State')!)._filterState; 
  // }

  private save() {
    window.localStorage.setItem('State', JSON.stringify(this));
  }

  // this._filterState = _filterState;
  private loadFilterState() {
    this._filterState = JSON.parse(window.localStorage.getItem('State')!)._filterState; 
  }
  // this._filterState = this.loadFilterState();
  
  public filteredToysList(_filterState: IFilters) {
    return this._toy.applyFilters(this._filterState);
    // this._filterState = _filterState;
    // return this._filteredToysList.map((toy) => toy.clone());
    // return this._toysList.map((toy) => toy.applyFilters(_filterState));
  }

  public get subscribe() {
    return this._eventBus.subscribe.bind(this._eventBus);
  }

  public get unSubscribe() {
    return this._eventBus.unSubscribe.bind(this._eventBus);
  }

  // public get isAuthorized(): boolean {
  //   return this.user && this.password;
  // }
  //
  // public get currentCategory(): string {
  //   return this._currentCategory;
  // }
  //
  // public changeCategory(category) {
  //   if (category -== ...) {}
  //   this._currentCategory = category;
  //
  //   this.emmit(ON_CATEGORY_CHANGE, category);
  // }


  // !!
  // public changeDataFilter(date: Date) {
  //   this._filteredToysList = this._toysList.filter((toy) => toy.date > date);
  //   this._eventBus.emmit(ON_FILTER_CHANGE);
  // }

  // public async getListFromApi() {
  //   this.videoList = await fetch('url');
  //   this.emmit('videoListChange');
  // }
}