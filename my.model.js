var MyModel = function(MyFacade) {
    this.init = function(param) {
        localParam = param;
        createParam(localParam);
        return this;
    }

    var createParam = function(param) {
        MyFacade.hogehgeApi(param,function(response) {
            message = response;
        });
    }

    this.getMessage = function() {
        return message;
    }
}
MyModel.$inject = ['MyFacade'];
app.service('MyModel',MyModel);