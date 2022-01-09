import renderComponent from './render-component';
import _ from '../../tools/util';

export default function initComponents(bootstrap, components) {
  // this.bootstrapComponent.render();
  // this.components.forEach(renderComponent);
  console.log(bootstrap);
  console.log(components);
  if (_.isUndefined(bootstrap)) {
    throw new Error('Bootstrap component is not defined');
  }

  [bootstrap, ...components].forEach(renderComponent);
}
