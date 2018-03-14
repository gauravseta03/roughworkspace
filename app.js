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
            },
            resolve :{
                data1:function($state){
                    console.log('inside logout resolve');
                    $state.go('login');
                }
            }
        })
        .state('logout.ad1',{
            url:"/ad1",
            templateUrl: "app/pages/logout/logoutad1.html",
            controller: 'logoutAd1Controller'
        })
    }).directive('myCustomer',function(){
        return {
            template: 'nnfdnfsdujn{{aray1}}',
            scope :{
                aray1: '=aray'
            }
        };
    })
    .directive('listDirective',function(){
        return {
            restrict: 'E',
            scope: {
                aray1: '=aray'
            },
            templateUrl: 'app/directives/list-directive.html',
            link: function(scope,element,attrs){
            }
        };



    })
    .directive('timer',function($interval,dateFilter){
        function link(scope,element,attrs){
            var format; 
            var intervalId;
            function updateTime(){
                element.text(dateFilter(new Date(),format));
            }

            scope.$watch(attrs.timeFormat,function(value){
                    format = value;
                    updateTime();
            });
            element.on('$destroy',function(){
                $interval.cancel(intervalId);
            })
            intervalId = $interval(function(){
                    updateTime();
            },1000);

        }
            return {
                link:link
            };
    });