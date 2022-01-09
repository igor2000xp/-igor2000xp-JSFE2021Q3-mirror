import _ from '../../tools/util';
import RoutingModule from './routing.module';

export default function initRouting(routes, dispatcher) {
  if (_.isUndefined(routes)) return;

  const routing = new RoutingModule(routes, dispatcher);
  routing.init();
}
