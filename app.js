angular.module('mainApp')
    .config(function($stateProvider, $urlRouterProvider, $compileProvider){

        $urlRouterProvider.otherwise('/login');
        $stateProvider.state('login', {
            url: "/login",
            templateUrl: "app/pages/login/login.html",
            controller: 'loginController',
            data: {
                applicationUserFunction: "DASHBOARD",
            }
        })
        .state('logout', {
            url: "/logout",
            templateUrl: "app/pages/logout/logout.html",
            controller: 'logoutController',
            data: {
                applicationUserFunction: "DASHBOARD",
            }
        });
    });