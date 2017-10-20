/**
 * Created by Nan on 2017/10/13.
 */
var app = angular.module("app", ["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('server',{
            url:'/server',
            templateUrl:'App/View/server.html'
        })
        .state('banking',{
            url:'/banking',
            templateUrl:'App/View/banking.html'
        })
    $urlRouterProvider.otherwise('/server')
})