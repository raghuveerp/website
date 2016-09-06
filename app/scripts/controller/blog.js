'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('raghuveer')
    .filter('escape', function() {
        return function(input) {
            if(input) {
                return window.encodeURIComponent(input);
            }
            return '';
        }
    })
    .controller('BlogController', function ($scope, $location) {
        $scope.oneAtATime = true;

        $scope.blogsBaseURL = $location.$$absUrl;
        console.log($scope.blogsBaseURL);

        $scope.blogs = [
            {
                title: 'Blog Heading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam commodi cupiditate dolores nam quos temporibus, vitae?',
                keyword: 'blog1'
            },
            {
                title: 'Another Blog Heading',
                content: 'Commodi facere odit perspiciatis ratione, reiciendis suscipit voluptas. Atque labore natus veritatis voluptatum!',
                keyword: 'blog1'
            }
        ];

    });
