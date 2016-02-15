var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function ($scope) {
        $scope.pagetitle = "Welcome to Flapper News!";
        $scope.posts = [
            { title: 'post 1', upvotes: 5 },
            { title: 'post 2', upvotes: 3 },
            { title: 'post 3', upvotes: 16 },
            { title: 'post 4', upvotes: 9 },
            { title: 'post 5', upvotes: 4 }
        ];
        $scope.addPost = function () {
            if (!$scope.title || $scope.title === "") { return; }
            $scope.posts.push({ title: $scope.title, upvotes: 0 });
            $scope.title = '';
        };
        $scope.incrementUpvotes = function (post) {
            post.upvotes += 1;
        };
        $scope.decrementUpvotes = function (post) {
            post.upvotes -= 1;
        };
    }
]);