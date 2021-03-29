"use strict";

angular.module("mainScreen").component("mainScreen", {
  //  template: "<div class='' ><h1 class='new-class' >{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
  templateUrl: "/templates/main-screen.html",
  controller: ($routeParams, $scope) => {
    $scope.price = 0;
    $scope.quantity = 1;
    $scope.rows = [];
    $scope.total = 0;
    $scope.errorMessage = "";
    let ms = [
      { name: "kebab&kofts", price: 100, category: "Grills", id: "1" },
      { name: "kebab Halla", price: 100, category: "Grills", id: "2" },
      { name: "bechamel with Meat", price: 40, category: "Pasta", id: "3" },
      { name: "Negresco", price: 40, category: "Pasta", id: "4" },
      { name: "Spagjetti with Salsa", price: 40, category: "Pasta", id: "5" },
      { name: "Chicken Ranch", price: 60, category: "Pizza", id: "6" },
      { name: "Pepperoni", price: 60, category: "Pizza", id: "7" },
      { name: "Smoky Cheese", price: 60, category: "Pizza", id: "8" },
      { name: "Nutella Tagen", price: 50, category: "Desserts", id: "9" },
      { name: "Konafa with Cheese", price: 50, category: "Desserts", id: "10" },
      { name: "Molten Cake", price: 50, category: "Desserts", id: "11" },
    ];
    $scope.categories = [
      { name: "Grills", id: "1" },
      { name: "Pasta", id: "2" },
      { name: "Pizza", id: "3" },
      { name: "Desserts", id: "4" },
    ];
    $scope.meals = ms;
    $scope.updateMeals = () => {
      console.log($scope.selectedCategory);
      $scope.meals = ms.filter(
        (m) => m.category === $scope.selectedCategory.name
      );
    };
    $scope.updatePrice = () => {
      if ($scope.selectedMeal) {
        $scope.price = $scope.selectedMeal.price;
        if ($scope.spicy) {
          $scope.price += 2;
        }
        if ($scope.combo) {
          $scope.price += 2;
        }
        if ($scope.quantity) {
          $scope.price = $scope.price * $scope.quantity;
        }
      }
    };
    $scope.addOrder = () => {
      let combo = $scope.combo ? "Combo" : "";
      let spicy = $scope.spicy ? "Spicy" : "";
      const addons = combo + " " + spicy;
      if ($scope.selectedMeal && $scope.quantity) {
        $scope.rows.push({
          item: $scope.selectedMeal.name,
          Q: $scope.quantity,
          price: $scope.selectedMeal.price,
          addons,
          total: $scope.price,
        });
        $scope.total = 0;
        $scope.rows.forEach((element) => ($scope.total += element.total));
        $scope.selectedMeal = "";
        $scope.selectedCategory = "";
        $scope.quantity = 1;
        $scope.spicy = false;
        $scope.combo = false;
        $scope.price = 0;
        $scope.meals = ms;
        $scope.errorMessage = "";
      } else {
        $scope.errorMessage = "You must fill all required fields";
      }
    };
    $scope.newOrder = () => {
      $scope.rows = [];
      $scope.total = 0;
      $scope.selectedMeal = "";
      $scope.selectedCategory = "";
      $scope.quantity = 1;
      $scope.spicy = false;
      $scope.combo = false;
      $scope.price = 0;
      $scope.meals = ms;
      $scope.errorMessage = "";
    };
  },
});
