import Control from '../common/control';
import { IFilters } from './interfacesAndTypes/interfaces';

export class ToysPage extends Control {
  onTree: () => void;

  reset: (defaultSettings: IFilters) => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const onTree = new Control(this.node, 'button', '', 'tree');
    onTree.node.onclick = () => {
      this.onTree();
    };

    const defaultSettings = {
      form: '',
      color: '',
      size: '',
      favorite: false,
      quantity: 0,
      year: 1940,
      sortBy: '',
      searchFor: '', 
    };
    const resetButton = new Control(this.node, 'button', '', 'reset');
    resetButton.node.onclick = () => {
      this.reset(defaultSettings);
    };

  }
}