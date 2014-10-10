'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  var spendData = [
        {Name: 1, Spent: 40, Year: 2011},
          {Name: 1, Spent: 10, Year: 2011},
          {Name: 1, Spent: 40, Year: 2011},
          {Name: 2, Spent: 70, Year: 2012},
          {Name: 2, Spent: 20, Year: 2012},
          {Name: 3, Spent: 50, Year: 2013},
          {Name: 3, Spent: 30, Year: 2013}
        ];

            // in the controller, we only keep data modeling (or better, delegate to a service)
     var ndx = crossfilter(spendData)
          $scope.yearDim = ndx.dimension(function(d) {return +d.Year;})
          $scope.spendDim = ndx.dimension(function(d) {return Math.floor(d.Spent/10);})
          $scope.nameDim = ndx.dimension(function(d)  {return d.Name;})
          $scope.spendPerYear = $scope.yearDim.group().reduceSum(function(d) {return +d.Spent;})
          $scope.spendPerName = $scope.nameDim.group().reduceSum(function(d) {return +d.Spent;})
          $scope.spendHist = $scope.spendDim.group().reduceCount();

          $scope.ndx = ndx;
  });
