angular.module('raghuveer')
    .directive('typedjs', function () {
        return {
            restrict: 'E',
            scope: {
                strings: '=',
                options: '='
            },
            template: '<span id="typedtext"></span>',
            link: function ($scope, $element, $attrs) {
                var options = $scope.options || {
                        strings: $scope.strings,
                        typeSpeed: 5,
                        backDelay: 100,
                        contentType: "text",
                        showCursor: true,
                        loop: false,
                        cursorChar: "|",
                        callback: function(){
                            $("#bounce i").addClass("fa fa-hand-o-down fa-lg bounce");
                        }
                    };

                $(function () {
                    $("#typedtext").typed(options);
                });
            }
        };
    });
