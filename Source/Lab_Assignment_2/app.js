/**
 * Created by User on 31-01-2017.
 */
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'login.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'Register.html',
            controller: 'contactController'
        });

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'home';
});

animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'login';
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'Register';
});

var app = angular.module('myApp', []);

app.controller('PersonController', function ($scope) {
    console.log("gsaf");
    $scope.logins = [];
    $scope.login = function (user, pwd) {

        if(user == "" || user==null || pwd == "" || pwd==null){
            window.location ="login.html";
            return;
        }
        localStorage.setItem("name" , user);
        $scope.logins.push( localStorage.getItem("name") + " was logged in.");
        window.location ="home.html";

    };

});


