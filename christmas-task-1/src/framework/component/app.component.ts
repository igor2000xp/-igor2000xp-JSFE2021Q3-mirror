import State from '../state/state';
import Component from './component';
import { IRouter } from '../router/interfaces';
import Router from '../router/router';
import { routes } from '../../routes';
import { ROUTE_NOT_FOUND, ROUTER_ELEMENT_SELECTOR } from '../../constants';
import EventBus from '../utils/event-bus';
import HomePageComponent from '../../components/home-page-component';
import ChristmasToysListComponent from '../../components/christmas-toys-list.component';


export default class AppComponent extends Component {
  parentNode: HTMLElement;

  private pageComponent: Component;

  constructor(parentNode: HTMLElement){
    super(parentNode);
    this.parentNode = parentNode;
    // const homePage = new HomePageComponent(this.node);
    this.start();
  }

  public initState(state: State) {
    Component.state = state;
    console.log('start init State  from app.component');
    console.log(Component.state);
  }

  public initRouter(router: IRouter) {
    Component.router = router;
    // console.log('init Route from app.component');
    // console.log(router);
  }

  public initEventBus() {
    const eventBus = new EventBus();
  }

  private goHome(): string {
    console.log('We are Home');
    const home = new HomePageComponent(this.parentNode);
    // const home = new HomePageComponent(document.body);
    // const stateGo = home.render();
    return home.getNewState;
  }

  private goToys() {
    console.log('We are on Toys');
    const toys = new ChristmasToysListComponent(this.parentNode);
  }

  public start() {
    console.log('New start');
    const state = new State;
    state.init();
    this.initState(state);

    this.initRouter(new Router(routes, ROUTE_NOT_FOUND, ROUTER_ELEMENT_SELECTOR));
    // const router = Component.router;
    console.log('after init Route from app.component');
    // console.log(router);

    this.initEventBus();
    // router?.goTo(state._page);



    // state._page = this.goHome();
    // if (state._page == '/') state._page = this.goHome();
    // console.log('exit home');
    // // state._page = this.goHome();

    // console.log(state._page);
    // if (state._page == 'toys') this.goToys();


  }
}