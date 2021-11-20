import { Component as WFMComponent } from './core/component/component'
import { Module as WFMModule } from './core/module';
import { Directive as WFMDirective } from './core/directive/directive';
import { bootstrap } from './core/functions/bootstrap';
import { _ } from './tools/util';
import { router } from './core/routing/router';
import { $ } from './tools/dom';
import { EventEmitter } from './tools/event-emitter';


export {
  WFMModule,
  WFMComponent,
  WFMDirective,
  EventEmitter,
  bootstrap,
  _,
  $,
  router
}