import Control from '../common/control';
import { ToysPage } from './toysPage';

export class HomePage extends Control {
  onToys: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const startButton = new Control(this.node, 'button', '', 'start' );
    startButton.node.onclick = () => this.onToys();
  }
}