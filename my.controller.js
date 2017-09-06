var MyController = function($scope,MyFactory,MyModel) {
    $scope.init = function() {
        var param = {};
        $scope.viewModel = MyFactory.createViewModel(param);
    }
}
MyController.$inject = ['$scope','MyFactory','MyModel'];
app.controller('MyController',MyController);