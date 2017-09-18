'use strict'
angular.module('myApp' , ['ngMaterial', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        // controller: 'homeCtrl'
    })
    .state('register', {
        url:'/register',
        templateUrl: 'partials/register.html',
        controller: 'regCtrl'
    })
    .state('contact', {
        url:'/contacts',
        templateUrl: 'partials/contacts.html',
        controller: 'contactCtrl'
    })
    
    $urlRouterProvider.otherwise('home');
})
.controller('mainCtrl', function($scope, $state){
    $scope.$back = function() { 
    window.history.back();
  };
 // var x = localStorage.getItem('authToken');
 // $scope.isLogin = x;

})
// app.controller('homeCtrl', function($scope, $state, $http) {
    
//     $scope.isSubmitDisabled = true;
//     $scope.isRequires = true;
//     $scope.isValid = function(user) {
//         if ($scope.myForm.$valid) {
//             $scope.isSubmitDisabled = false;
//         } else {
//             $scope.isSubmitDisabled = true;
//         }
//     }

//     $scope.loginFunction = function(user) {
//         $http.post('/login', user)
//         .then(function(res) {
//             if (res.status == 200) {
//                 var status = res.data.status;
//                 if (status == 'success') {
//                     localStorage.setItem('authToken', res.data.token);
//                     window.alert("You Are Successfully Logged In")
//                     $state.go("userdetails");
//                 } else {
//                     window.alert("Invalid Username or Password OR Register First")
//                 }
//             }

//         })
//     }

// })



