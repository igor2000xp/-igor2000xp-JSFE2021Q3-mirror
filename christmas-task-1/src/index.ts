
import State from './framework/state/state';
import Router from './framework/router/router';
import AppComponent from './framework/component/app.component';
import Component from './framework/component/component';
import { routes } from './routes';
import { ROUTE_NOT_FOUND, ROUTER_ELEMENT_SELECTOR } from './constants';

async function bootstrap(): Promise<void> {
  const app = new AppComponent();
  const state = new State;
  state.init();
  app.initState(state);

  app.initRouter(new Router(routes, ROUTE_NOT_FOUND, ROUTER_ELEMENT_SELECTOR));
  const route = Component.router;
  console.log('after init Route from app.component');
  console.log(route);
  // console.log(Component.state);
  // app.initEventBus(new EventBus());
  // await app.start();
  await app.render();
}

bootstrap().then(() => {
  console.log('Started');
});
