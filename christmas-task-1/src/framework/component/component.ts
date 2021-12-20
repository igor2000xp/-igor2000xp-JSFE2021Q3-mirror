import State from '../state/state';
import { IRouter } from '../router/interfaces';

export default class Component {
  private element: HTMLElement | null = null;

  protected static state: State | null = null;
  
  protected static router: IRouter | null = null;

  // constructor() {}

  public async destroy(): Promise<void> {
    await this.beforeDestroy();
    if (this.element != null) {
      this.element.outerHTML = '';
    }
  }

  protected async beforeDestroy(): Promise<void> {}

  protected get state(): State | null {
    return Component.state;
  }

  public render() {
    console.log('render from component');
  }
}