import { WFMComponent, router } from 'framework';

class DirectivePageComponent extends WFMComponent {
  constructor(config) {
    super(config);


  }

}

export const directivePageComponent = new DirectivePageComponent({
  selector: 'app-directive-page',
  template: `
    <div class="row">
      <div class="dir__block col s6 offset-s3">
        <h3 appHover="red">Наведи на меня</h3>

      </div>
    </div>
  `,
  styles: `
  .dir__block {
    margin-top 30px;
  }
  `
});

