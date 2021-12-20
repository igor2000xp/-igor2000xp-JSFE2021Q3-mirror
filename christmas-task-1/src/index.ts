
import State from './framework/state/state';
import Router from './framework/router/router';
import AppComponent from './framework/component/app.component';
import { routes } from './routes';
import { ROUTE_NOT_FOUND, ROUTER_ELEMENT_SELECTOR } from './constants';

async function bootstrap(): Promise<void> {
  const app = new AppComponent();
  app.initState(new State());

  app.initRouter(new Router(routes, ROUTE_NOT_FOUND, ROUTER_ELEMENT_SELECTOR));
  // app.initEventBus(new EventBus());
  // await app.start();
  await app.render();
}

bootstrap().then(() => {
  console.log('Started');
});
