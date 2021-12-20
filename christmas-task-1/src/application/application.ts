import Control from '../common/control';
import { HomePage } from './homePage';
import { TreesPage } from './treesPage';
import { ToysPage } from './toysPage';
import HeaderPageComponent from './components/headerPageComponent';


export class Application extends Control{

  constructor(parentNode:HTMLElement){
    super(parentNode);
    const homePage = new HomePage(this.node);
    homePage.onToys = () => {
      homePage.destroy();
      const toyPage = new ToysPage(this.node);
      // const headerPageComponent = new HeaderPageComponent(this.node);
      toyPage.onTree = () => {
        toyPage.destroy();
        const treesPage = new TreesPage(this.node);
      };
      toyPage.reset = (settings) => {
        console.log(settings);
      };
    };
  }


}