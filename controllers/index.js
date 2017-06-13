// Divide all of your modules in different files and
// require them here
// app is express's app
// setting is defined in /config
var client_path = './client';
var list_path = './list';
var backend_path = './backend';
var home_path = './home';

module.exports = function(app, api_router, config){
	console.log('->*<- [START] Load Controller ->*<-');

	require(home_path + '/home')(app, api_router, config);
	console.log('1. home Controller is loaded');

 	require(client_path + '/client')(app, api_router, config);
	console.log('2. client Controller is loaded');

 	require(list_path + '/list')(app, api_router, config);
	console.log('3. list Controller is loaded');

	require(backend_path + '/backend')(app, api_router, config);
	console.log('4. backend Controller is loaded');
};
