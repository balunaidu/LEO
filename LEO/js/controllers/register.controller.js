(function() {
	angular.module('myApp')
        .controller('regCtrl', ['$scope', '$state', '$http', regCtrl]);

 function regCtrl($scope, $state, $http) {
    
    // if (localStorage.getItem('authToken')) {
    //     $state.go('userdetails')
    // }
    // $scope.isSubmitDisabled = true;
    // $scope.isRequires = true;
    
    $scope.register = function(user) {
        console.log(user)
        $http.post('/register', user)
        .then(function(res) {
            if (res) {
                window.alert("Registration Successful")
                $state.go('login');
            }

        })
    }
}
}())
