angular.module('logoutModule').
controller('logoutController',function($scope,$stateParams,$state){
    $scope.title1="logging outMiles India";
    $scope.keyUpDescription=function(){
        console.log('in logout key released');
    }
    console.log('in logout controller');
})
.controller('logoutAd1Controller',function($scope,$stateParams,$state){
    console.log('in ad1');
});