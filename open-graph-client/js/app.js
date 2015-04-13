var app = angular.module('myapp', []);

app.controller('mainCtrl', function($scope, $http){
    $scope.getInfo = function(url) {
        $http.get('http://localhost:3000/getinfo?url='+url)
            .then(function(response){
                $scope.info = response.data;
            });
    }
});
