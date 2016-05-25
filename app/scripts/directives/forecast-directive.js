'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Directive of the frontEndApp
 */
angular.module('frontEndApp')
  .directive('forecastWidget', function() {
    return {
      restrict: 'EA',
      templateUrl: '../../views/forecast.html',
      scope: {
        place: '=collection'
      }
    };
  });
