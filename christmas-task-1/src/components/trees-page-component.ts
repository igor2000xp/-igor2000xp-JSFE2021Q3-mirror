import Component from '../framework/component/component';
import { ON_FILTER_CHANGE } from '../framework/state/state';
import { ON_CATEGORY_CHANGE } from '../constants';
import { IDataItem } from '../application/interfacesAndTypes/interfaces';
import { footer } from './common/footer';
import data from '../assets/data';
import PartOfTreesImages from './common/parts-component/parts-trees-images';

export default class ChristmasToysListComponent extends Component {
  // private toyComponentList: Component[];

  private list: IDataItem[] = [];

  private numberCards = 20;

  private numberTrees = 6;

  private numberBackground = 10;

  // private state: AppComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.render();
  }

  init() {
    if (this.state !== null) this.state.subscribe(ON_FILTER_CHANGE, this.onFilterUpdate.bind(this));
  }
  
  async beforeDestroy(): Promise<void> {
    if (this.state !== null) this.state.unSubscribe(ON_CATEGORY_CHANGE, this.onFilterUpdate.bind(this));
  }

  render() {
    console.log('Christmas page');

    // let dataTrees: Array<IDataItem> = [];
    let toysFav = ''; 

    const partOfTreesImages = new PartOfTreesImages(this.numberCards);
    toysFav = partOfTreesImages.render(this.numberCards);
    // console.log(toysFav);

    let numberTrees = '';
    let numberTreesDecorated = '';
    for (let i = 1; i <= this.numberTrees; i++) {
      numberTrees += `<div class="tree menu-item" data-tree="${i}"></div>`;
      numberTreesDecorated += `
      <div class="tree-decorate">
          <img src="https://raw.githubusercontent.com/igor2000xp/assets/main/tree/${i}.webp" class="tree-decorate-img" alt="decorate-tree">
       </div>
      `;
    }

    let backgrounds = '';
    for (let i = 1; i <= this.numberBackground; i++) {
      backgrounds += `<div class="bg menu-item" data-bg="${i}"></div>`;
    }

    const page = document.createElement('section');
    page.classList.add('section-trees');
    page.innerHTML =
    `
    <div class="trees-left">

    <div class="header-container">      
      <nav class="nav-bar">
        <a class="logo"></a>
        <a href="#" class="switch-main-page">Игрушки</a>
        <a href="#" class="switch-favorites-page active-link">Ёлка</a>
      </nav>   
    </div>

    <div class="favorites-menu">
      <div class="snow-audio-container menu-container">
        <div class="audio-control menu-item"></div>
        <div class="snow-control menu-item"></div>
      </div>
      <div class="tree-container menu-container">
        ${numberTrees}
      </div>
      <div class="bg-container menu-container">
      ${backgrounds}
      </div>
      <div class="garland-container menu-container">
        <div class="garland-btns">
          <button
            class="color-btn multicolor-btn"
            data-color="multicolor"
          ></button>
          <button class="color-btn red-btn" data-color="red"></button>
          <button class="color-btn blue-btn" data-color="blue"></button>
          <button class="color-btn yellow-btn" data-color="yellow"></button>
          <button class="color-btn green-btn" data-color="green"></button>
        </div>
        <div class="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            class="onoffswitch-checkbox"
            id="myonoffswitch"
            checked=""
          />
          <label class="onoffswitch-label" for="myonoffswitch">
            <div class="onoffswitch-inner"></div>
            <div class="onoffswitch-switch"></div>
          </label>
        </div>
      </div>
    </div>
  </div>
  <div class="trees-main">
    <div class="tree-main__container">
      <div class="snowflakes hide"></div>
      <div class="garland-tree-container"></div>
      <map name="tree-map">
        <!-- <area coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664" shape="poly"> -->
      </map>
      <img
        src="https://raw.githubusercontent.com/igor2000xp/assets/main/tree/1.webp"
        class="main-tree"
        usemap="#tree-map"
        alt="tree"
      />
    </div>
  </div>

  <div class="trees-right">

    <div class="header-controls">
      <div class="select"><span>0</span></div>
    </div>

    <div class="favorites-aside">
      <div class="favorites-container favorite-right">
      ${toysFav}
      </div>
    </div>

    <div class="favorites-decorate">
      <div class="favorites-decorate-container">
        ${numberTreesDecorated}
      </div>
    </div>

  </div>

    `;
    document.body.append(page);

    const footerConst = document.createElement('footer');
    footerConst.classList.add('footer');
    footerConst.innerHTML = footer;

    document.body.append(footerConst);

  }

  onFilterUpdate() {
    // this.list = document.querySelectorAll('.sdfsdf');
    if (this.state !== null) this.list = this.state.filteredToysList(this.state._toysList, this.state._filterState);
    // if()
    // let filterStateToy: IFilters =
    // this.list = listElements.filter((video) => video.category === this.state.currentCategory);
    this.render();
    // this.toyComponentList.forEach((toyC) => toyC.disable());
  }
}