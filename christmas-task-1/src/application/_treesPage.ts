import Control from '../common/_control';
import HeaderPageComponent from './components/_headerPageComponent';

export class TreesPage extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const headerPageComponent = new HeaderPageComponent(this.node);
    headerPageComponent.onHome = () => {
      const homePage = new HeaderPageComponent(this.node);
    };
  }
}