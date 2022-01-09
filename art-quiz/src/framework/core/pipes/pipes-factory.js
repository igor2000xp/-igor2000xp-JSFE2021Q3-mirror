class PipesFactory {
  constructor() {
    this.pipes = {};
  }

  registerPipe(pipe) {
    this.pipes[pipe.name] = pipe;
  }

  getPipe(name) {
    return this.pipes[name];
  }
}

const pipesFactory = new PipesFactory();
export default pipesFactory;
