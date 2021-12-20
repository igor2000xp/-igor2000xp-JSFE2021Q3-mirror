import EventBus, { Handler } from '../utils/event-bus';
import { ON_ROUTE_CHANGE } from '../../constants';
import { IRoute, IRouter } from './interfaces';
import Component from '../component/component';

export default class Router implements IRouter {
  private routes: IRoute[];

  private currentPath = '/';
  
  private pageComponent: Component;
  
  private readonly pageElement: HTMLElement;
  
  private readonly eventBus = new EventBus();
  
  private readonly notFoundRoute: string;

  constructor(routes: IRoute[], notFoundRoute: string, pageElSelector: string) {
    this.routes = [...routes];
    this.pageElement = document.querySelector(pageElSelector)!;
    this.notFoundRoute = notFoundRoute;
  }

  get subscribe(): (event: string, handler: Handler) => void {
    return this.eventBus.subscribe.bind(this);
  }

  get unSubscribe(): (event: string, handler: Handler) => void {
    return this.eventBus.unSubscribe.bind(this);
  }

  goTo(routePath: string) {
    console.log('goTo app.component');
    const route = this.routes.find((route) => route.path === routePath);
    if (!route) {
      // !! ?? Loop ??
      this.goTo(this.notFoundRoute);
    }
    this.pageComponent?.destroy();
    this.currentPath = routePath;
    if (route !== undefined) this.pageComponent = new route.component();
    this.pageComponent.render();
    this.eventBus.emmit(ON_ROUTE_CHANGE);
  }
}