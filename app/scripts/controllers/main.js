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
        {Expt: 1, Run: 40, Speed: 2011},
          {Expt: 1, Run: 10, Speed: 2011},
          {Expt: 1, Run: 40, Speed: 2011},
          {Expt: 2, Run: 70, Speed: 2012},
          {Expt: 2, Run: 20, Speed: 2012},
          {Expt: 3, Run: 50, Speed: 2013},
          {Expt: 3, Run: 30, Speed: 2013}
        ];

            // in the controller, we only keep data modeling (or better, delegate to a service)
     var ndx = crossfilter(spendData)
        $scope.runDimension  = ndx.dimension(function(d) {return "run-"+d.Run;})
        $scope.speedSumGroup = $scope.runDimension.group().reduceSum(function(d) {return d.Speed * d.Run;});
  });
