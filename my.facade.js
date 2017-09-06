var MyFacade = function($http) {
    this.hogehgeApi = function(param,resultSuccess,resultFailure) {
        // ほんとはこうしたい
        // $http({
        //     method: 'POST',
        //     url: 'http://hogehoge.com',
        //     data: param
        //   }).success(function(response) {
        //     resultSuccess(response);
        //   }).error(function(response) {
        //     if(resultFailure != undefined) {
        //         resultFailure(response);
        //         return;
        //     }
        //     // エラー処理
        //   });
        resultSuccess("Hello World!")
    }
}
MyFacade.$inject = ['$http'];
app.service('MyFacade',MyFacade);