import Component from '../component/component';
import { Handler } from '../utils/event-bus';

export interface IRoute {
  path: string,
  component: typeof Component,
}

export interface IRouter {
  subscribe(event: string, handler: Handler): void,
  unSubscribe(event: string, handler: Handler): void,
  goTo(routePath: string): void,
}