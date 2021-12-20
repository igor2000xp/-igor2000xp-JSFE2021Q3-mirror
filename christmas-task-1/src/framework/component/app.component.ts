import State from '../state/state';
import Component from './component';
import { IRouter } from '../router/interfaces';

export default class AppComponent extends Component {
  public initState(state: State) {
    Component.state = state;
  }

  public initRouter(router: IRouter) {
    Component.router = router;
  }
}