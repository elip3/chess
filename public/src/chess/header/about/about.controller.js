(function(){

'use strict';

angular.module('chess')
.controller('AboutController', AboutController);

AboutController.$inject = ['SigninService'];
function AboutController(SigninService){
	var $ctrl = this;
	$ctrl.toggleList = function(){
		var aboutDropMenu = $('#about-dropdown');

		aboutDropMenu.attr('class').includes('open') ? 
			aboutDropMenu.removeClass('open') : 
			aboutDropMenu.addClass('open');
	};

	$ctrl.closeList = function(){
		$('#about-dropdown').removeClass('open');
	};

	$ctrl.isLoggedIn = function(){
		return SigninService.loggedIn;
	};
};	

})(); //IIFE