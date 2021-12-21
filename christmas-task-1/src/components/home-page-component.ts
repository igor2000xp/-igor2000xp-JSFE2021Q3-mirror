import Component from '../framework/component/component';
import { ON_FILTER_CHANGE } from '../framework/state/state';
import { ON_CATEGORY_CHANGE } from '../constants';
import { IDataItem } from '../application/interfacesAndTypes/interfaces';

export default class HomePageComponent extends Component {
  private toyComponentList: Component[];

  private list: IDataItem[] = [];
  // private state: AppComponent;

  // constructor() {
  //   super();
  //   // this.state = state;
  // }

  init() {
    if (this.state !== null) this.state.subscribe(ON_FILTER_CHANGE, this.onFilterUpdate.bind(this));
  }
  
  async beforeDestroy(): Promise<void> {
    if (this.state !== null) this.state.unSubscribe(ON_CATEGORY_CHANGE, this.onFilterUpdate.bind(this));
  }

  onFilterUpdate() {
    // this.list = document.querySelectorAll('.sdfsdf');
    // if (this.state !== null) this.list = this.state.filteredToysList(this.state._toysList, this.state._filterState);
    // if()
    // let filterStateToy: IFilters =
    // this.list = listElements.filter((video) => video.category === this.state.currentCategory);
    this.render();
    // this.toyComponentList.forEach((toyC) => toyC.disable());
  }

}