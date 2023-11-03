(function(){

'use strict';

angular.module('chess')
.component('classicalDescription', {
	templateUrl: 'src/chess/classical/templates/classical.description.html',
	controller: 'DescriptionController',
	bindings: {
		arrow: '<'
	}
});

})();//IIFE