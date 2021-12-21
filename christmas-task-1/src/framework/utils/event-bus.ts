import { ALL_EVENTS }  from '../../constants';
const DEFAULT_EVENT = 'default';

interface Subscription {
  event: string,
  handler: Handler,
}

export type Handler = () => void;

export default class EventBus {
  private subscriptions: Subscription[] = [];

  // constructor() {}

  subscribe(eventType: string = DEFAULT_EVENT, handler: Handler): void {
    if (this.subscriptions.find((sub) => eventType === sub.event && sub.handler === handler)) return;
    this.subscriptions.push({
      event: eventType,
      handler,
    });
  }

  unSubscribe(eventType: string = DEFAULT_EVENT, handler: Handler): void {
    const subItem = this.subscriptions.find((sub) => eventType === sub.event && sub.handler === handler);
    let subIndex = -1;
    if (subItem !== undefined) {
      subIndex = this.subscriptions.indexOf(subItem);
    }
    if (subIndex !== -1) {
      this.subscriptions.splice(subIndex, 1);
    }
  }

  emmit(eventType: string) {
    this.subscriptions
      .filter((sub) => sub.event === eventType || sub.event === ALL_EVENTS)
      .forEach(({ handler }) => handler());
  }
}