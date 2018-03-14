angular.module('loginModule').
controller('loginController',function($scope){
    $scope.title1="Miles India";
    $scope.keyup=function(event){
        console.log('key released');
    }
    $scope.format='M/d/yyyy hh:mm:ss a';
    //$scope.lllll = 'vvv';
});