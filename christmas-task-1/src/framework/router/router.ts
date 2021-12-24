import EventBus, { Handler } from '../utils/event-bus';
import { ON_ROUTE_CHANGE } from '../../constants';
import { IRoute, IRouter } from './interfaces';
import Component from '../component/component';
import HomePageComponent from '../../components/home-page-component';
import { routes } from '../../routes';

export default class Router implements IRouter {
  private routes: IRoute[];

  private currentPath = '/';
  
  private pageComponent: Component;

  private homeComponent: HomePageComponent;
  
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
    console.log('goTo router');
    console.log(routePath);
    console.log('pageComponent');
    console.log(this.pageComponent);
    console.log('routes');
    console.log(routes);
    // if(!this.pageComponent == undefined) {
      // this.pageComponent = 
      const routesItem = this.routes.find((route) => route.path === this.currentPath);
      console.log('routesItem');
      console.log(routesItem);
      // this.pageComponent = routesItem;
    // } else {
      
    // }
    
    // console.log(this.pageComponent);
    const route = this.routes.find((route) => route.path === routePath);
    console.log('route');
    console.log(route);
    if (!route) {
      this.goTo(this.notFoundRoute);
    }
    console.log('pageComponent');
    // console.log(this.pageComponent);
    this.pageComponent?.destroy();
    // Component.destroy();
    this.currentPath = routePath;
    console.log(this.pageComponent);
    if (route !== undefined) this.pageComponent = new route.component(document.body);
    console.log(this.pageComponent);
    // const hhh = new route.
    // this.pageComponent.destroy();
    // this.pageComponent.render();
    // this.homeComponent.
    // this.pageComponent.
    this.eventBus.emmit(ON_ROUTE_CHANGE);
  }
}