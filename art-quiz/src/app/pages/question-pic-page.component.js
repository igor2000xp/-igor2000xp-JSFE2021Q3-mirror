import { WFMComponent, $ } from '../../framework/index';
import tabsAuthHeader from './tabs-auth-vars/tabs-pic-header';
import tabsAuthFooter from './tabs-auth-vars/tabs-auth-footer';

class QuestPicComponent extends WFMComponent {
  constructor(config) {
    super(config);
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

const questPicComponent = new QuestPicComponent({
  selector: 'app-quest-pic',
  template: `
  <div class="q-wrapper">

  <div class="q-container">
<!-- Header -->
  ${tabsAuthHeader}
<!-- content Section  -->
      <section class="q-content">
        <div class="q-question">
          <h5>
            Кто автор данной картины?
          </h5>
        </div>
<!-- !! Picture -->
        <div class="q-picture-center">
          <div class="q-picture">
            <img 
            src="https://raw.githubusercontent.com/igor2000xp/assets-art-quiz/main/assets/full/100full.webp" 
            alt="">
          </div>
        </div>
<!-- !! Buttons -->


        <div class="q-buttons-container">

          <div class="q-row__buttons">
            <a href="#tabs-pic">
              <button class="waves-effect q-button__quest" style="transition: 1s ease-out;"> 
                Марк Шагал
              </button>
            </a>
            <a href="#tabs-pic">
              <button class="waves-effect q-button__quest" style="transition: 1s ease-out;"> 
                Пабло Пикассо
              </button>
            </a>

          </div>
          <div class="q-row__buttons">
            <a href="#tabs-pic">
              <button class="waves-effect q-button__quest" style="transition: 1s ease-out;"> 
                Густав Климт
              </button>
            </a>
            <a href="#tabs-pic">
              <button class="waves-effect q-button__quest" style="transition: 1s ease-out;"> 
                Эдвард Мунк
              </button>
            </a>
          </div>

        </div>
      </section>
<!-- Footer and end of the content section -->
    ${tabsAuthFooter} 
  </div>
</div>
  `,

  styles: '',
});

export default questPicComponent;
