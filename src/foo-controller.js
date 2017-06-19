define(['./bar-view'], function(BarView) {

  const age = 12;

  function FooController() {
    this.name = 'foo-controller';
    this.age = age;
  }

  FooController.prototype = {
    View: BarView,

    render() {
    }
  };

  return FooController;

});
