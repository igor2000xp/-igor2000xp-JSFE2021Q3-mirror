import _ from '../../tools/util';

export default function initDirectives(directives) {
  if (_.isUndefined(directives)) return;

  directives.forEach((d) => d.init());
}
