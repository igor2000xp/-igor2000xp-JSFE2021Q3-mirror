import { Component as WFMComponent } from './core/component/component'
import { Module as WFMModule } from './core/module';
import { Directive as WFMDirective } from './core/directive/directive';
import { Pipe as WFMPipe } from './core/pipes/pipe';
import { bootstrap } from './core/functions/bootstrap';
import { _ } from './tools/util';
import { router } from './core/routing/router';
import { $ } from './tools/dom';
import { http } from './tools/http';
import { EventEmitter } from './tools/event-emitter';


export {
  WFMModule,
  WFMComponent,
  WFMDirective,
  WFMPipe,
  EventEmitter,
  bootstrap,
  _,
  $,
  http,
  router
}