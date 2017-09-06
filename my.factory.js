var MyFactory = function(MyModel) {
    this.createViewModel = function(param) {
        return MyModel.init(param);
    }
}
MyFactory.$inject = ['MyModel'];
app.service('MyFactory',MyFactory);