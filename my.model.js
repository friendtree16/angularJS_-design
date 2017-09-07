var MyModel = function(MyFacade) {
    this.init = function(param) {
        localParam = param;
        apiRequest(localParam);
        return this;
    }

    var apiRequest = function(param) {
        MyFacade.hogehgeApi(param,function(response) {
            localResponse = response;
        });
    }

    this.getMessage = function() {
        return localResponse.data.message;
    }
}
MyModel.$inject = ['MyFacade'];
app.service('MyModel',MyModel);