(function() {
angular.module('myApp')
        .controller('contactCtrl', ['$scope', '$state', '$http', contactCtrl]);
 function contactCtrl($scope, $state, $http) {
    // $scope.cancel = function() {
    //     $state.go('userdetails')
    // }
    $scope.send = function(contact) {
        console.log(contact)
        $http.post('/contact', contact)
        .then(function(response) {
            if (response) {
                window.alert('Details Updated')
                $state.go('home')
            }
        })
    }
}
}())
