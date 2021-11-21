import { WFMComponent, router, http, _ } from 'framework';

class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config);

    this.data = {
      title: 'Главная страница работает!!!',
      linkTitle: 'Здесь будет картина.',
      ip: 'Loading...'
    }
  }

  events() {
    return {
      'click .js-link': 'goToTabs'
    };
  }

  afterInit() {
    http.get('https://api.ipify.org?format=json')
      .then(({ip}) => {
          _.delay(2000).then(() => {
            this.data.ip = ip;
            this.render();
          });
          
      })
  }

  goToTabs(event) {
    event.preventDefault();
    router.navigate('tabs');
  }


}

export const homePageComponent = new HomePageComponent ({
  selector: 'app-home-page',
  template: `
  <div class="row">
  <div class="home__block col s6 offset-s3">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{ title }}</span>
        <p>{{linkTitle}}</p>
      </div>
      <div class="card-action">
        <a href="#not-existing-path" class="js-link">{{ ip }}</a>
      </div>
    </div>
  </div>
</div>
  `,
  styles: `
  .home__block { 
    margin-top: 40px;
    marg 
  }
  
  `

});

