import initComponents from './component/init-components';
import initRouting from './routing/init-routing';
import initDirectives from './directive/init-directives';
import EventEmitter from '../tools/event-emitter';
import initPipes from './pipes/init-pipes';

export default class WFMModule {
  constructor(config) {
    this.components = config.components;
    this.bootstrap = config.bootstrap;
    this.routes = config.routes;
    this.directive = config.directive;
    this.pipes = config.pipes;
    this.dispatcher = new EventEmitter();
  }

  start() {
    initPipes(this.pipes);
    initComponents(this.bootstrap, this.components);
    initRouting(this.routes, this.dispatcher);
    initDirectives(this.directive);
    this.dispatcher.on('routing.change-page', () => {
      initDirectives(this.directive);
    });
  }
}
