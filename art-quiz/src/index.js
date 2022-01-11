import { _ } from './framework/index';
import bootstrap from './framework/core/functions/bootstrap';
import appModule from './app/app.module';
import './css/materialize.min.css';
import './css/normalize.css';
import './css/style.css';
import './css/questions.css';

_.delay(1000).then(() => {
  console.log('index.js bootstrap(appModule)');
  bootstrap(appModule);
});
