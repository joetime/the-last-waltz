(function () { 
	'use strict';
	
	var app = angular.module('app', ['LocalStorageModule', 'ngRoute']);
	
	app.config(['$routeProvider', '$locationProvider', function ($route, $location) {
		
		var len = getSetList().length;
		for(var i = 0; i < len; i++) {
			$route
				.when('/Song/' + i, {
				templateUrl: 'song_' + i + '.html',
				controller: 'SongCtrl',
			});
		}
		
		$route.otherwise({
			templateUrl: 'test.html',
			controller: 'SongCtrl',
		});
		
		$location.html5Mode(true);
	}]);
	
	app.controller('SongCtrl', ['$routeParams', function($route) {
		this.name = "SongCtrl";
  		this.params = $route;
	}]);
	
	app.controller('index_Ctrl', [ '$scope', 'localStorageService', function ($s, LS) {
	
		// load set list
		$s.setList = getSetList();
		
		// song # from cache or -1
		$s.songIndex = LS.get('songIndex') || -1;
	
		// move prev/next
		$s.prevSong = function () { $s.openSong($s.songIndex - 1); };
		$s.nextSong = function () { $s.openSong($s.songIndex + 1); };
	
		// open the song
		$s.openSong = function(i) {
			$s.songIndex = i;
			LS.set('songIndex', i);
			$s.tempUrl = 'songs/song_' + i + '.html'
		};
		
		
		// open song on load (if necessary)
		if ($s.songIndex != -1) $s.openSong($s.songIndex);
		
 	}]);
	
	function getSetList() {
		return [
			{ title: "Up on Cripple Creek"	, data: {} },
			{ title: "The Shape I'm In"	, data: {} },
			{ title: "It Makes No Difference"	, data: {} },
			{ title: "Life is a Carnival"	, data: {} },
			{ title: "This Wheel's on Fire"	, data: {} },
			{ title: "W.S. Walcott Medicine Show"	, data: {} },
			{ title: "Georgia on My Mind"	, data: {} },
			{ title: "Ophelia"	, data: {} },
			{ title: "King Harvest (Has Surely Come)"	, data: {} },
			{ title: "The Night They Drove Old Dixie Down"	, data: {} },
			{ title: "Stage Fright"	, data: {} },
			{ title: "Rag Mama Rag"	, data: {} },
			{ title: "Who Do You Love?"	, data: {} },
			{ title: "Such a Night"	, data: {} },
			{ title: "Down South in New Orleans"	, data: {} },
			{ title: "Mystery Train"	, data: {} },
			{ title: "Caledonia"	, data: {} },
			{ title: "Mannish Boy"	, data: {} },
			{ title: "All Our Past Times"	, data: {} },
			{ title: "Further on Up the Road"	, data: {} },
			{ title: "Helpless"	, data: {} },
			{ title: "Four Strong Winds"	, data: {} },
			{ title: "Coyote"	, data: {} },
			{ title: "Shadows and Light"	, data: {} },
			{ title: "Furry Sings the Blues"	, data: {} },
			{ title: "Dry Your Eyes"	, data: {} },
			{ title: "Tura Lura Lural (That's an Irish Lullaby)"	, data: {} },
			{ title: "Caravan"	, data: {} },
			{ title: "Acadian Driftwood"	, data: {} },
			{ title: "Genetic Method/Chest Fever"	, data: {} },
			{ title: "The Last Waltz Suite: Evangeline", data: {} },
			{ title: "The Weight", data: {} },
			{ title: "Baby, Let Me Follow You Down"	, data: {} },
			{ title: "Hazel"	, data: {} },
			{ title: "I Don't Believe You (She Acts Like We Never Have Met)"	, data: {} },
			{ title: "Forever Young"	, data: {} },
			{ title: "Baby, Let Me Follow You Down", data: {} },
			{ title: "I Shall Be Released"	, data: {} },
			{ title: "Jam #1"	, data: {} },
			{ title: "Jam #2"	, data: {} },
			{ title: "Don't Do It"	, data: {} },
			{ title: "Theme from The Last Waltz", data: {} },
			{ title: "Greensleeves", data: {} },
			{ title: "Introduction to The Canterbury Tales in Chaucerian dialect", data: {} },
			{ title: "The Weight", data: {} },
			{ title: "Evangeline", data: {} },
			{ title: "Loud Prayer", data: {} }
		];
	}
	 
})();