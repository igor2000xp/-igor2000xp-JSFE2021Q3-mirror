import State from '../state/state';
import Component from './component';
import { IRouter } from '../router/interfaces';
import Router from '../router/router';
import { routes } from '../../routes';
import { ROUTE_NOT_FOUND, ROUTER_ELEMENT_SELECTOR } from '../../constants';
import EventBus from '../utils/event-bus';
import HomePageComponent from '../../components/home-page-component';

export default class AppComponent extends Component {
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

  public goHome() {
    console.log('We are Home');
    const home = new HomePageComponent;
    home.render();
  }

  public start() {
    console.log('New start');
    const state = new State;
    state.init();
    this.initState(state);

    this.initRouter(new Router(routes, ROUTE_NOT_FOUND, ROUTER_ELEMENT_SELECTOR));
    const route = Component.router;
    console.log('after init Route from app.component');
    console.log(route);

    this.initEventBus();

    if (state._page == '/') this.goHome();


  }
}