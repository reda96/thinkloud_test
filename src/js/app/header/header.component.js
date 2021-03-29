"use strict";
angular.module("header").controller("HeaderController", ($scope, $location) => {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
});
