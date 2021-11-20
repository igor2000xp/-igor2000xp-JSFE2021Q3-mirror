import { initComponents } from './component/init-components';
import { initRouting } from './routing/init-routing';
import { initDirectives } from './directive/init-directives';
import { EventEmitter } from '../tools/event-emitter';

 export class Module { 
   constructor(config) {
    this.components = config.components;
    this.bootstrap = config.bootstrap;
    this.routes = config.routes;
    this.directive = config.directive;

    this.dispatcher = new EventEmitter();
   }

   start() {
    initComponents(this.bootstrap, this.components);
    initRouting(this.routes, this.dispatcher);
    initDirectives(this.directive);

    this.dispatcher.on('routing.change-page', () => {
      initDirectives(this.directive);
    })
   };

}
