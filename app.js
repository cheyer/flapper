var app = angular.module('flapperNews', []);

app.factory('posts', [function () {
    var o = {
        posts: [
            { title: 'Google', link: 'http://google.com', upvotes: 5 },
            { title: 'Twitter', link: 'http://twitter.com', upvotes: 3 },
            { title: 'Facebook', link: 'http://facebook.com', upvotes: 16 },
            { title: 'Amazon', link: 'http://amazon.com', upvotes: 9 },
            { title: 'Youtube', link: 'http://youtube.com', upvotes: 4 }
        ]
    };
    return o;
}]);

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function ($scope, posts) {
        $scope.pagetitle = "Welcome to Flapper News!";
        $scope.posts = posts.posts;
        $scope.addPost = function () {
            if (!$scope.title || $scope.title === "") { return; }
            $scope.posts.push({ title: $scope.title, link: $scope.link, upvotes: 0 });
            $scope.title = '';
            $scope.link = '';
        };
        $scope.incrementUpvotes = function (post) {
            post.upvotes += 1;
        };
        $scope.decrementUpvotes = function (post) {
            post.upvotes -= 1;
        };
    }
]);