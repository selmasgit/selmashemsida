var app = angular.module('selmashemsida', [])

app.controller('indexController', ['$scope', '$timeout', '$location', function($scope, $timeout, $location, $window, $http, $filter) {
    $scope.currentPage = 'content/home.html';
    $scope.isLoading = false;

    $scope.pages = [
        { hash : 'index', page : 'home.html' },
        { hash : 'about', page : 'about.html' },
        { hash : 'portfolio', page : 'portfolio.html' },
    ];

    $scope.changePage = function(hash)
    {
        $location.hash(hash);
        $scope.isLoading = true;
        var currentPage = $scope.pages.find(function(item) {
            if(item.hash == hash)
                return item;
        });
        $scope.currentPage = 'content/' + (currentPage != undefined ? currentPage.page : 'home.html');
        $scope.isLoading = false;
    };

    $scope.$on('$locationChangeSuccess', function (a, newUrl, oldUrl) {
        var hash = $location.hash();
        if(hash == undefined || hash == '')
            hash = 'index';

        $scope.changePage(hash);
    });
}]);