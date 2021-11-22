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

<div class="container">

  <header class="heder__settings">
    <div class="art-settings">
      <img src="../src/img/quiz/carbon_settings.svg" alt="art-setup">
    </div>
  </header>
  <div class="wrapper">
    <section class="home__page">
      <div class="logo__container">
        <img class="logo" src="../src/img/quiz/group_1438.png" alt="art-quiz">
      </div>
      
      <button class="button__home button__artist"> 
        <p>Artist quiz</p>
      </button>
      <button class="button__home button__pic"> 
        <p>Artist quiz</p>
      </button>
    </section>

    <footer class="footer"> 
      <div class="footer-container__down">

        <div class="footer-container__down-rss">
          <a href="https://app.rs.school/course/student/cross-check-submit?course=js-fe-2021Q3">
            <img src="../src/img/quiz/rs_school_js.svg" alt="RSSchool">
          </a>
        </div>
        <div class="footer-link">
          <a href="https://github.com/igor2000xp/rsschool-cv">App developer igor2000xp</a>
        </div>

        <div class="footer-link">
          © 2021
        </div>
      </div>
    </footer>

  </div>
  
</div>
  `,
  styles: `

  `

});

