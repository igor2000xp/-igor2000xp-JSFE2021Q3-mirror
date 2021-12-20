import Control from '../../common/_control';

class HeaderPageComponent extends Control {
  onHome: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode);

    const homeButton = new Control(this.node, 'button', '', 'home0');
    homeButton.node.onclick = () => this.onHome();
  }
}

export default HeaderPageComponent;