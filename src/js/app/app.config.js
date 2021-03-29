"use strict";

angular.module("test").config(($routeProvider, $locationProvider) => {
  $locationProvider.html5Mode({ enabled: true });

  $routeProvider
    .when("/", {
      template: "<main-screen></main-screen>",
    })

    .when("/add", {
      template: "<add-screen></add-screen>",
    })

    .otherwise({
      template: "Not Found",
    });
});
