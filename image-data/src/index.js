import { _ } from 'framework';
import { bootstrap } from './framework/core/functions/bootstrap';
import { appModule } from "./app/app.module";

_.delay(1000).then(() => {
  bootstrap(appModule);
})
