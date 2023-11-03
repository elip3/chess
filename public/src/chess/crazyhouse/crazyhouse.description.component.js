(function(){

'use strict';

angular.module('chess')
.component('crazyhouseDescription', {
	templateUrl: 'src/chess/crazyhouse/templates/crazyhouse.description.html',
	controller: 'DescriptionController', 
	bindings: {
		arrow: '<'
	}
})

})(); //IIFE