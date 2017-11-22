var app = angular.module('selmashemsida', [])

app.controller('indexController', ['$scope', '$timeout', function($scope, $timeout, $window, $http, $filter) {
    $scope.currentPage = 'content/home.html';
    $scope.isLoading = false;

    $scope.changePage = function(page)
    {
        $scope.isLoading = true;
        $scope.currentPage = page;
        $scope.isLoading = false;
        toastrNotification.showNotification("Page changed!", 'success');
    };
}]);