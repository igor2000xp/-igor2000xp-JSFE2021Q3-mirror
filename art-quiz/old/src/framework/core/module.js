export class Module {
  constructor(config) {
    this.components = config.components;
  }

  start() {
    this.initComponents()
  }

  initComponents() {
    this.components.array.forEach(c => c.render());
  }
}