import { WFMComponent } from '../framework/index';

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

const appComponent = new AppComponent({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
    `,
});

export default appComponent;
