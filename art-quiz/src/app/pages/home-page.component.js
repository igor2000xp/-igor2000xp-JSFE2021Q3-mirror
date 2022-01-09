import {
  WFMComponent,
} from '../../framework/index';
import homePageMain from './home-vars/home-vars-main';

class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config);

  // this.data = {
  //   title: 'Главная страница работает!!!',
  //   linkTitle: 'Здесь будет картина.',
  //   ip: 'Loading...'
  // }
  }

  // events() {
  //   return {
  //     'click .js-link': 'goToTabs'
  //   };
  // }

  // afterInit() {
  //   http.get('https://api.ipify.org?format=json')
  //     .then(({ip}) => {
  //         _.delay(1000).then(() => {
  //         this.data.ip = ip;
  //          this.render();
  //         });

  //     })
  // }

  // goToTabs(event) {
  //   event.preventDefault();
  //   router.navigate('tabs-pic');
  // }
}

const homePageComponent = new HomePageComponent({
  selector: 'app-home-page',
  template: homePageMain,
  styles: `

  `,

});

export default homePageComponent;
