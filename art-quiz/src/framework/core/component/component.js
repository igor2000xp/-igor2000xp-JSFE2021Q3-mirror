import _ from '../../tools/util';
import $ from '../../tools/dom';
import applyPipe from '../pipes/apply-pipe';
import parsePipe from '../pipes/parse-pipe';

function initEvents() {
  if (_.isUndefined(this.events)) return;

  const events = this.events();

  Object.keys(events).forEach((key) => {
    const listener = key.split(' ');

    this.el
      .find(listener[1])
      .on(listener[0], this[events[key]].bind(this));
  });
}

function hasPipe(key) {
  return key.includes('|');
}

function getKeyFromPipe(key) {
  return key.split('|')[0].trim();
}

function compileTemplate(template, data) {
  if (_.isUndefined(data)) return template;

  const regex = /\{{(.*?)}}/g;

  const templateReturn = template.replace(regex, (str, d) => {
    let key = d.trim();
    let pipe;

    if (hasPipe(key)) {
      pipe = parsePipe(key);
      key = getKeyFromPipe(key);
    }

    if (_.isUndefined(pipe)) {
      return data[key];
    }

    return applyPipe(pipe, data[key]);
  });

  return templateReturn;
}

function initStyles(styles) {
  if (_.isUndefined(styles)) return;

  const style = $(document.createElement('style'));
  style.html(styles);
  $(document.head).append(style);
}

export default class WFMComponent {
  constructor(config) {
    this.template = config.template;
    this.selector = config.selector;
    this.styles = config.styles;
    this.el = null;
  }

  render() {
    initStyles(this.styles);

    this.el = $(this.selector);

    if (!this.el) throw new Error(`Component with selector ${this.selector} wasn't found`);

    this.el.html(compileTemplate(this.template, this.data));

    initEvents.call(this);
  }
}
