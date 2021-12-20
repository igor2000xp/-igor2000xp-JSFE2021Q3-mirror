import Control from '../common/_control';
import { IFilters } from './interfacesAndTypes/interfaces';
import HeaderPageComponent from './components/_headerPageComponent';
import { HomePage } from './_homePage';
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

    // const check1 = new Control(this.node, 'checkbox', 'check', 'shape');
    // check1.node.onclick = () => {
      
    // };

    const resetButton = new Control(this.node, 'button', '', 'reset');
    resetButton.node.onclick = () => {
      this.reset(filterInit);
    };

    const yearsSet = new Control<HTMLInputElement>(this.node, 'input', 'years');
    yearsSet.node.type = 'range';
    yearsSet.node.min = 1940..toString();
    yearsSet.node.max = 2020..toString();
    yearsSet.node.step = 1..toString();
    

    const quantitySet = new Control<HTMLInputElement>(this.node, 'input', 'quantity');
    quantitySet.node.type = 'range';
    quantitySet.node.min = 1..toString();
    quantitySet.node.max = 12..toString();
    quantitySet.node.step = 1..toString();

    const checkRed = new Control<HTMLInputElement>(this.node, 'input', '');


  }
}