(function(){

'use strict';

angular.module('chess')
.component('difficulty', {
	templateUrl: 'src/chess/engine-difficulty/templates/difficulty.html',
	controller: 'DifficultyController'
});

})(); //IIFE