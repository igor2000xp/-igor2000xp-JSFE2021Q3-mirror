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
    let toysFav = ''; 

    const partOfTreesImages = new PartOfTreesImages(this.numberCards);
    toysFav = partOfTreesImages.render(this.numberCards);

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
        <a class="logo" id="home"></a>
        <a class="switch-main-page" id="toys">Игрушки</a>
        <a class="switch-favorites-page active-link">Ёлка</a>
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

    const buttonHome = document.getElementById('home')!;
    buttonHome.addEventListener( 'click', () => {
      console.log('click-click');
      Component.router?.goTo('/');
    });
    const buttonToys = document.getElementById('toys')!;
    buttonToys.addEventListener( 'click', () => {
      Component.router?.goTo('toys');
    });



let currentDroppable: (HTMLElement | null) = null;
    
    const ball = document.getElementById('1-2')!;

    ball.onmousedown = function (event) {
      const shiftX = event.clientX - ball.getBoundingClientRect().left;
      const shiftY = event.clientY - ball.getBoundingClientRect().top;
      function moveAt(pageX: number, pageY: number) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
      }

      function enterDroppable(elem: HTMLElement) {
        elem.style.background = 'pink';
      }
  
      function leaveDroppable(elem: HTMLElement) {
        elem.style.background = '';
      }

      ball.style.position = 'absolute';
      ball.style.zIndex = '1000';
      document.body.append(ball);

      moveAt(event.pageX, event.pageY);



      function onMouseMove(event: MouseEvent) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow) return;

        const droppableBelow: HTMLElement = elemBelow.closest('.droppable')!;
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null если мы были не над droppable до этого события
            // (например, над пустым пространством)
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
            // (например, только что покинули droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      ball.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
      };

    };

    ball.ondragstart = function () {
      return false;
    };

  }

  onFilterUpdate() {
    if (this.state !== null) this.list = this.state.filteredToysList(this.state._toysList, this.state._filterState);
    this.render();
  }
}