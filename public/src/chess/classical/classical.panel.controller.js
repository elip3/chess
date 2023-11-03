(function(){
	
'use strict';

angular.module('chess')
.controller('ClassicalPanelController', ClassicalPanelController);

ClassicalPanelController.$inject = ['GameService'];
function ClassicalPanelController(GameService) {
	var $ctrl = this;
	$ctrl.onClickPlay = function(){
		$('.board').css('opacity', 1);
		GameService.begin();
		console.log('game on!');
	}
};	

})(); //IIFE