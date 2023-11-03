(function(){

'use strict';

angular.module('chess')
.component('userGames', {
	templateUrl: 'src/chess/user-body/templates/games.html',
	controller: 'UserGamesController'
});

})(); //IIFE