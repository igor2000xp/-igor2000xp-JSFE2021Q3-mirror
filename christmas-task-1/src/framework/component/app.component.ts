import State from '../state/state';
import Component from './component';
import { IRouter } from '../router/interfaces';

export default class AppComponent extends Component {
  public initState(state: State) {
    Component.state = state;
    console.log('start init State  from app.component');
  }

  public initRouter(router: IRouter) {
    Component.router = router;
    console.log('init Route from app.component');
    console.log(router);
  }

  public start() {

  }
}