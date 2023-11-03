(function(){

'use strict';

angular.module('chess')
.component('classicalPanel', {
	templateUrl: 'src/chess/classical/templates/classical.panel.html',
	controller: 'ClassicalPanelController'
});

})(); //IIFE