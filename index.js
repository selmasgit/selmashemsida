app.controller('indexController', ['$scope', 'toastrNotification', '$timeout', function($scope, toastrNotification, $timeout, $window, $http, $filter) {
    $scope.currentPage = 'home.html';
    $scope.isLoading = false;

    $scope.changePage = function(page)
    {
        $scope.isLoading = true;
        $scope.currentPage = page;
        $scope.isLoading = false;
    };
}]);