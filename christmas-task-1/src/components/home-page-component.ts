import Component from '../framework/component/component';
import State from '../framework/state/state';
import { ON_FILTER_CHANGE } from '../framework/state/state';
import { ON_CATEGORY_CHANGE } from '../constants';
import { IDataItem } from '../application/interfacesAndTypes/interfaces';
import { footer } from './common/footer';



export default class HomePageComponent extends Component {
  private toyComponentList: Component[];

  private list: IDataItem[] = [];

  private newState: string;
  // private state: AppComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    // this.state = state;
    this.render();
    // this.destroy();
  }

  init() {
    if (this.state !== null) this.state.subscribe(ON_FILTER_CHANGE, this.onFilterUpdate.bind(this));
  }
  
  async beforeDestroy(): Promise<void> {
    if (this.state !== null) this.state.unSubscribe(ON_CATEGORY_CHANGE, this.onFilterUpdate.bind(this));
  }

  get getNewState() {
    return this.newState;
  }

  set setNewState(newState: string) {
    this.newState = newState;
    // Component.router = '';
    // Component.destroy().then();
  }

  render() {
    console.log('render Home');
    const page = document.createElement('section');
    page.classList.add('section-home');
    page.innerHTML =
    `
    <div class="ball ball1"></div>
    <div class="ball ball2"></div>
    <h1 class="start-page-title">Новогодняя игра «Наряди ёлку»</h1>
    <button class="switch-start-page" id="main-page">Начать</button>
    `;
    document.body.append(page);

    const footerConst = document.createElement('footer');
    footerConst.classList.add('footer');
    footerConst.innerHTML = footer;

    document.body.append(footerConst);

    this.newState = '/';
    const buttonMain = document.getElementById('main-page')!;
    buttonMain.addEventListener( 'click', () => {
      this.newState = 'toys';
      console.log('click-click');
      Component.router?.goTo('toys');
      // Component.appComponent?.destroy();
    });
    // if (buttonMain !== null) buttonMain.onclick = () => {
    // = function () {
      // self.newState = 'toys';
      // function IssuerCall(setIssuerCallState: (newState: { message: string }) => void)
      // this.setNewState(setIssuerCallState: (newState: { message: string }));
    // };
    // buttonMain.onclick = function () {
    //   newState = 'toys';
    // };
    console.log('home page output');
    console.log(this.newState);
  }

  onFilterUpdate() {
    this.render();
  }

  public async destroy(): Promise<void> {
      console.log('destroy Home');
  }

}