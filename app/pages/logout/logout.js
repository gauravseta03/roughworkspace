angular.module('logoutModule').
controller('logoutController',function($scope){
    $scope.title1="logging outMiles India";
    $scope.keyUpDescription=function(){
        console.log('in logout key released');
    }
});