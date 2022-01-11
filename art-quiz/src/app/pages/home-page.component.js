import {
  WFMComponent,
} from '../../framework/index';
import homePageMain from './home-vars/home-vars-main';

class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

const homePageComponent = new HomePageComponent({
  selector: 'app-home-page',
  template: homePageMain,
  styles: '',
});

export default homePageComponent;
