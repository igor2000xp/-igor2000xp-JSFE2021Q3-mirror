import Control from '../common/control';
import { IFilters } from './interfacesAndTypes/interfaces';
import HeaderPageComponent from './components/headerPageComponent';
import { HomePage } from './homePage';
import { filterInit } from './components/filterInit';

export class ToysPage extends Control {
  onTree: () => void;

  reset: (defaultSettings: IFilters) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode);

    const headerPageComponent = new HeaderPageComponent(this.node);
    headerPageComponent.onHome = () => {
      this.destroy();
      const homePage = new HomePage(this.node);
    };

    const onTree = new Control(this.node, 'button', '', 'tree');
    onTree.node.onclick = () => {
      this.onTree();
    };

    // const defaultSettings = {
    //   form: '',
    //   color: '',
    //   size: '',
    //   favorite: false,
    //   quantity: 0,
    //   year: 1940,
    //   sortBy: '',
    //   searchFor: '', 
    // };
    const resetButton = new Control(this.node, 'button', '', 'reset');
    resetButton.node.onclick = () => {
      this.reset(filterInit);
    };

  }
}