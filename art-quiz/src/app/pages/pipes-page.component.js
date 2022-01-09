import { WFMComponent } from '../../framework/index';

class PipePageComponent extends WFMComponent {
  constructor(config) {
    super(config);

    this.data = {
      number: 10,
    };
  }
}

const pipePageComponent = new PipePageComponent({
  selector: 'app-pipe-page',
  template: `
    <div class="row">
      <div class="pipe__block col s6 offset-s3">
        <h4>{{ number }}</h4>
        <h4>{{ number | multi }}</h4>
        <h4>{{ number | multi:5 }}</h4>
        <h4>{{ number | multi:15 }}</h4>
      </div>
    </div>
  `,
  styles: `
  .pipe__block {
    margin-top 30px;
  }
  `,
});

export default pipePageComponent;
