(function(){

'use strict';

angular.module('chess')
.component('chess960Description', {
	templateUrl: 'src/chess/chess960/templates/chess960.description.html',
	controller: 'DescriptionController',
	bindings: {
		arrow: '<'
	}
})

})();//IIFE