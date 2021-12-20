import Control from '../common/_control';
import { HomePage } from './_homePage';
import { TreesPage } from './_treesPage';
import { ToysPage } from './_toysPage';
import HeaderPageComponent from './components/_headerPageComponent';


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