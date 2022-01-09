import { WFMModule } from '../framework/index';
import appComponent from './app.component';
import appRoutes from './app.routes';
import appHoverDirective from './shared/directives/hover.directive';
import appMultiPipe from './shared/pipes/multi-pipe';

class AppModule extends WFMModule {
  constructor(config) {
    super(config);
  }
}

const appModule = new AppModule({
  components: [

  ],

  bootstrap: appComponent,
  routes: appRoutes,
  directive: [
    appHoverDirective,
  ],

  pipes: [
    appMultiPipe,
  ],
});

export default appModule;
