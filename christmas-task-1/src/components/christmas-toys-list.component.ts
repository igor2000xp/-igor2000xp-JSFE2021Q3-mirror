import Component from '../framework/component/component';
import { ON_FILTER_CHANGE } from '../framework/state/state';
import { ON_CATEGORY_CHANGE } from '../constants';
import { IDataItem } from '../application/interfacesAndTypes/interfaces';
import { footer } from './common/footer';
import data from '../assets/data';
export { data } from '../assets/data';

export default class ChristmasToysListComponent extends Component {
  private toyComponentList: Component[];

  private list: IDataItem[] = [];
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

    let cardsList = '';
    for (let i = 0; i < data.length; i++) {
      cardsList += `
      <div class="cards-item">
      <div class="card-item__header">
        <p>${data[i].name}</p>
        <img 
        class="card-img" 
        src="https://raw.githubusercontent.com/igor2000xp/assets/main/toys/${i + 1}.webp" 
        alt="toy"
        >
      </div>
      <div class="card-item__text">Количество: ${data[i].count}</div>
      <div class="card-item__text">Год покупки: ${data[i].year}год</div>
      <div class="card-item__text">Форма игрушки: ${data[i].shape}</div>
      <div class="card-item__text">Цвет игрушки: ${data[i].color}</div>
      <div class="card-item__text">Размер игрушки: ${data[i].size}</div>
      <div class="card-item__text">Любимая: ${data[i].favorite}</div>
    </div>
      `;
    }

    // console.log(cardsList);

    // console.log(data[1].name);
    // console.log(data.length);

    const page = document.createElement('section');
    page.classList.add('section-toy');
    page.innerHTML =
    `
    <div class="left-side">

      <div class="left-side__top">
        <div class="left-side__sign">
          <img src="https://raw.githubusercontent.com/igor2000xp/assets/main/svg/audio.svg" width="36" height="36"
            alt="loud">
        </div>
        <div class="left-side__sign">
          <img src="https://raw.githubusercontent.com/igor2000xp/assets/main/svg/snowflake.svg" width="36" height="36"
            alt="snowflake">
        </div>
        <div class="left-side__search">
        </div>
      </div>

      <div class="controls">

        <div class="filters">

          <div class="controls-title">
            Фильтры по значению
          </div>

          <div class="shapes">Форма:
            <button data-filter="ball"></button>
            <button data-filter="bell"></button>
            <button data-filter="cone"></button>
            <button data-filter="snowflake"></button>
            <button data-filter="shape"></button>
          </div>
          <div class="color">Цвет:
            <button data-filter="white"></button>
            <button data-filter="yellow"></button>
            <button data-filter="red"></button>
            <button data-filter="blue"></button>
            <button data-filter="green"></button>
          </div>
          <div class="size">Размер:
            <button data-filter="great"></button>
            <button data-filter="middle"></button>
            <button data-filter="small"></button>
          </div>

          <div class="favorite-container">Только любимые:
            <div class="form-group">
              <input type="checkbox" class="favorite-input" id="checkbox">
              <label for="checkbox" class="favorite-input-label"></label>
            </div>
          </div>

          <div class="range">
            <div class="controls-title">Фильтры по диапазону</div>
            <div class="count">
              <span class="control-span">Количество экземпляров:</span> 
              <div class="count-slider-container">
                <output class="slider-output">1</output>
                <div class="count-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div class="noUi-base"><div class="noUi-connects"><div class="noUi-connect" style="transform: translate(0%) scale(1);"></div></div><div class="noUi-origin" style="transform: translate(-100%); z-index: 5;"><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1.0" aria-valuemax="12.0" aria-valuenow="1.0" aria-valuetext="1.00"><div class="noUi-touch-area"></div></div></div><div class="noUi-origin" style="transform: translate(0%); z-index: 4;"><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1.0" aria-valuemax="12.0" aria-valuenow="12.0" aria-valuetext="12.00"><div class="noUi-touch-area"></div></div></div></div></div>
                <output class="slider-output">12</output>
              </div>          
            </div>
            <div class="year">
              <span class="control-span">Год приобретения:</span> 
              <div class="year-slider-container">
                <output class="slider-output">1940</output>
                <div class="year-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div class="noUi-base"><div class="noUi-connects"><div class="noUi-connect" style="transform: translate(0%) scale(1);"></div></div><div class="noUi-origin" style="transform: translate(-100%); z-index: 5;"><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1940.0" aria-valuemax="2020.0" aria-valuenow="1940.0" aria-valuetext="1940.00"><div class="noUi-touch-area"></div></div></div><div class="noUi-origin" style="transform: translate(0%); z-index: 4;"><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1940.0" aria-valuemax="2020.0" aria-valuenow="2020.0" aria-valuetext="2020.00"><div class="noUi-touch-area"></div></div></div></div></div>
                <output class="slider-output">2020</output>
              </div>          
            </div>
          </div>

          <div class="sort">
            <div class="controls-title">Сортировка</div>
            <select class="sort-select">
              <option selected="" value="sort-name-max">По названию от «А» до «Я»</option>
              <option value="sort-name-min">По названию от «Я» до «А»</option>
              <option value="sort-count-max">По количеству по возрастанию</option>
              <option value="sort-count-min">По количеству по убыванию</option>
            </select>
            <button class="reset">Сброс фильтров</button>
          </div>

        </div>

      </div>
      </div>
      <section class="card-side">
        <menu class="menu">
          <ul>
            <li>
              ИГРУШКИ
            </li>
            <a href="http://">
              <li id="trees">
                  ЁЛКА
              </li>
            </a>
          </ul>

        </menu>
        <div class="cards">

          <div class="cards-items">

          ${cardsList}  

          </div>

        </div>
    `;
    document.body.append(page);

    const footerConst = document.createElement('footer');
    footerConst.classList.add('footer');
    footerConst.innerHTML = footer;

    document.body.append(footerConst);

    const buttonMain = document.getElementById('trees')!;
    buttonMain.addEventListener( 'click', () => {
      // this.newState = 'toys';
      console.log('click-click');
      Component.router?.goTo('trees');
    });
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