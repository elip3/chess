(function(){

'use strict';

angular.module('chess')
.controller('PromotionController', PromotionController);

PromotionController.$inject = ['PromotionService', '$document'];
function PromotionController(PromotionService, $document){
	// initialize selectable
	var $ctrl = this;
	$ctrl.initialize = function(){
		PromotionService.initSelectable();
		$("#promote-to").selectable({
			stop: PromotionService.onSelectionEnd
		});
	};

	$document.ready($ctrl.initialize);
}

})();