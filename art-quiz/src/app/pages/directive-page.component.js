import { WFMComponent } from '../../framework/index';

class DirectivePageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

const directivePageComponent = new DirectivePageComponent({
  selector: 'app-directive-page',
  template: `
    <div class="row">
      <div class="dir__block col s6 offset-s3">
        <h3 appHover="violet">Наведи на меня</h3>

      </div>
    </div>
  `,
  styles: `
  .dir__block {
    margin-top 30px;
  }
  `,
});

export default directivePageComponent;
