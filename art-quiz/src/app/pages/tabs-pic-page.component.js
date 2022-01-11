import { WFMComponent, $ } from '../../framework/index';
import tabsPicHeader from './tabs-auth-vars/tabs-pic-header';
import tabsAuthFooter from './tabs-auth-vars/tabs-auth-footer';
import funcTabsAuthCategories from './tabs-auth-vars/tabs-auth-categories-func';

const countCategories = 10;
const gameType = 'quest-pic';
const score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

class TabsPageComponent extends WFMComponent {
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
          ${tabsPicHeader}
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

  onTabClick({ target }) {
    const $target = $(target);
    if (!$target.hasClass('collapsible-header')) return;

    this.el.findAll('.js-tab').forEach((e) => {
      e.removeClass('active');
    });
    $target.parent().addClass('active');
  }
}

const tabsPicPageComponent = new TabsPageComponent({
  selector: 'app-tabs-pic',
  template: '',
  styles: '',
});

export default tabsPicPageComponent;
