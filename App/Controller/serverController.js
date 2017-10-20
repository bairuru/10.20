/**
 * Created by ∞◊»„»„ on 2017/10/19.
 */
app.controller('serverController',['$scope','carServer',function($scope,carServer){
    $scope.tit='tabs';
    carServer.getCars('get','Data/car.json').then(function(data){
        $scope.cars=data;
        console.log(data)
    })

}])