import Control from '../common/control';
import { HomePage } from './homePage';
import { TreesPage } from './treesPage';
import { ToysPage } from './toysPage';


export class Application extends Control{

  constructor(parentNode:HTMLElement){
    super(parentNode);
    const homePage = new HomePage(this.node);
    homePage.onToys = () => {
      homePage.destroy();
      const toyPage = new ToysPage(this.node);
      toyPage.onTree = () => {
        toyPage.destroy();
      };
      toyPage.reset = (settings) => {
        console.log(settings);
      };
    };
  }


}