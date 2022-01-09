import { WFMComponent, $ } from '../../framework/index';
import tabsAuthHeader from './tabs-auth-vars/tabs-auth-header';
import tabsAuthFooter from './tabs-auth-vars/tabs-auth-footer';
import funcTabsAuthCategories from './tabs-auth-vars/tabs-auth-categories-func';

const countCategories = 10;
const gameType = 'quest-auth';
let score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
class TabsAuthComponent extends WFMComponent {
  constructor(config) {
    super(config);
    this.selector = config.selector;
    this.styles = config.styles;
    this.gameType = gameType;
    this.score = score;
    this.el = null;
    this.countCategories = countCategories;
    this.templateItem00 = funcTabsAuthCategories(this.countCategories, this.score, this.gameType);
    this.template = `
    <div class="wrapper-art">
    <div class="container-cat__art">
          ${tabsAuthHeader}
      <section class="content">
        <div class="cont-pics">
          ${this.templateItem00}
        </div>
      </section>
          ${tabsAuthFooter}
    </div>
  </div>
    `;
  }


  // events() {
  //   return {
  //     'click .collapsible': 'onTabClick'
  //   }
  // };

  // onInit() {
  //   http.get('https://api.ipify.org?format=json')
  //     .then(({ip}) => {
  //         _.delay(1000).then(() => {
  //         this.data.ip = ip;
  //          this.render();
  //         });

  //     })
  // }

  onTabClick({ target }) {
    // console.log(event);
    const $target = $(target);
    if (!$target.hasClass('collapsible-header')) return;

    // this.el.querySelectorAll('.js-tab').forEach(e => {
    //   e.classList.remove('active');
    // });
    // target.parentNode.classList.add('active');

    this.el.findAll('.js-tab').forEach((e) => {
      e.removeClass('active');
    });
    $target.parent().addClass('active');
  }
}

const tabsAuthComponent = new TabsAuthComponent({
  selector: 'app-tabs-auth',
  template: ``,

  styles: `

    `,
});

export default tabsAuthComponent;
