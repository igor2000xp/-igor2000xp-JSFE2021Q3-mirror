import State from '../state/state';
import { IRouter } from '../router/interfaces';
import Control from '../../common/_control';
import HomePageComponent from '../../components/home-page-component';
import AppComponent from './app.component';
import { HomePage } from '../../application/_homePage';

// import { NodeType } from '../../application/interfacesAndTypes/interfaces';


export default class Component {
  private element: HTMLElement | null = null;

  public parentNode: HTMLElement = document.body;

  public page: Control;

  protected static state: State | null = null;
  
  public static router: IRouter | null = null;

  public static appComponent: Component | null = null;

  // public static appComponent: AppComponent | null = null;

  // public static home: HomePageComponent | null = null;

  constructor(parentNode: HTMLElement) {
    this.parentNode = parentNode;
    // this.page = new Control(this.parentNode);
  }

  public async destroyAsync(): Promise<void> {
    await this.beforeDestroy();
    if (this.element != null) {
      this.element.outerHTML = '';
    }
    document.body.innerHTML = '';
    console.log('destroyAsync');
  }

  public destroy(): void {
    if (this.element != null) {
      this.element.outerHTML = '';
    }
    document.body.innerHTML = '';
    console.log('destroyAsync');
    // this.destroyAsync();
  }

  protected async beforeDestroy(): Promise<void> {}

  protected get state(): State | null {
    return Component.state;
  }

  public render() {
    console.log('render from component');
    // console.log(Component.home?.render());
    console.log(document.body);
    // Component.router?.subscribe
    // Component.appComponent.
    // HomePageComponent
    // const homePage = new HomePageComponent(document.body);
    // home.render();
    // Component.router.
    // const homePageComponent = new HomePageComponent(document.body);
    // Component.homePageComponent?.render();
  }
}