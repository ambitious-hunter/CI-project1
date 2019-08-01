//creates module bandApp and oncludes ngRoute for all routing

var bandApp = angular.module("bandApp",['ngRoute']);
bandApp.set('appPath', 'src');
bandApp.use(express.static(__dirname +'/src'));

bandApp.route('/*')
  .get(function(req, res) {
    res.sendfile(bandApp.get('appPath') + '/index.html');
  });
// configure routes
bandApp.config(function($routeProvider){
	$routeProvider
	
	//route for home page
	.when('/', {templateUrl: 'src/home.html'})

	//route for music page
	.when('/music' ,{templateUrl: 'src/music.html'})

	// route for video page
	.when('/video' ,{templateUrl: 'src/video.html', controller: 'videoController'})

	//route for events page
	.when('/events' ,{templateUrl: 'src/events.html'})

	//route for events page
	.when('/events/1' ,{templateUrl: 'src/venue.html', controller: 'eventsController1'})

	//route for events page
	.when('/events/2' ,{templateUrl: 'src/venue.html', controller: 'eventsController2'})

		//route for events page
	.when('/events/3' ,{templateUrl: 'src/venue.html', controller: 'eventsController3'})

		//route for events page
	.when('/events/4' ,{templateUrl: 'src/venue.html', controller: 'eventsController4'})

	//route for contact page
	.when('/contact' ,{templateUrl: 'src/contact.html'})

	// thanks for subscribing to the newsletter
	.when('/thxNewsletter',{templateUrl: 'src/thankyou.html', controller: 'newsletterController'})

	// thanks for booking
	.when('/thxBooking',{templateUrl: 'src/thankyou.html', controller: 'bookingController'});

	//.otherwise({redirectTo: '/'});
});

// create the controller and inject Angular's scope
bandApp.controller('newsletterController',function($scope) {
	$scope.title = "Thank you for subscribing to our newsletter.";
	// $scope.subtitle = "Meanwhile please enjoy our music and video samples.";
});

bandApp.controller('bookingController',function($scope) {
	$scope.title = "Thank you for sending us your request.";
	// $scope.subtitle = "We will contact you as soon as possible, and meanwhile enjoy our music and video samples.";
});

bandApp.controller('eventsController1', function($scope){
	$scope.eventDate = "MAY 25 FRIDAY";
	// Conrad Jupiters Casino, Gold Coast, Australia
});

bandApp.controller('eventsController2', function($scope){
	$scope.eventDate = "JUNE 4 SUNDAY";
	$scope.eventLocation = "Enmore Theatre, Sydney, Australia";
});

bandApp.controller('eventsController3', function($scope){
	$scope.eventDate = "JUNE 10 SUNDAY";
	$scope.eventLocation = "Perth Concert Hall Perth, Australia";
});

bandApp.controller('eventsController4', function($scope){
	$scope.eventDate = "JUNE 31 SATURDAY";
	$scope.eventLocation = "Wrest Point Entertainment Centre, Hobart, Australia";
});