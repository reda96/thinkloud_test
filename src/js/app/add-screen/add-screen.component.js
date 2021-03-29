"use strict";

angular.module("addScreen").component("addScreen", {
  //  template: "<div class='' ><h1 class='new-class' >{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
  templateUrl: "/templates/add-screen.html",
  controller: ($routeParams, $scope) => {
    $scope.selectedPhoto =
      "https://www.pngfind.com/pngs/m/66-661092_png-file-upload-image-icon-png-transparent-png.png";
    $scope.categories = [
      { name: "Grills", id: "1" },
      { name: "Pasta", id: "2" },
      { name: "Pizza", id: "3" },
      { name: "Desserts", id: "4" },
    ];
    $scope.changePhoto = (files) => {
      console.log(files);
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        reader.readAsDataURL(file);
      }
    };
    $scope.imageIsLoaded = function (e) {
      $scope.$apply(function () {
        $scope.selectedPhoto = e.target.result;
      });
    };
  },
});
