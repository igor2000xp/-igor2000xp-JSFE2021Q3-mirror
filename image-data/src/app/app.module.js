import { appComponent } from "./app.component";

import { WFMModule } from "../framework/index";

class AppModule extends WFMModule {
  constructor(config) {
    super(config)
  }
}

export const appModule = new AppModule({
  components: [
    appComponent
  ]
})