(function(){

'use strict';

angular.module('chess')
.component('classical', {
	templateUrl: 'src/chess/classical/templates/classical.html',
	controller: 'ClassicalController'
});

})(); //IIFE