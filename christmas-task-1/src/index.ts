
import State from './framework/state/state';
// import Router from './framework/router/router';
import AppComponent from './framework/component/app.component';
// import Component from './framework/component/component';
// import { routes } from './routes';
// import { ROUTE_NOT_FOUND, ROUTER_ELEMENT_SELECTOR } from './constants';

async function bootstrap(): Promise<void> {
  const app = new AppComponent(document.body);
  // const app = new Application(document.body);
  // app.start();
  // await app.render();
}

bootstrap().then(() => {
  console.log('Started');
  // app.start();
});
