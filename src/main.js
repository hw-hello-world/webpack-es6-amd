import FooController from './foo-controller';
import Model from './shared/Model';

const c = new FooController({m: new Model()});

c.render();
