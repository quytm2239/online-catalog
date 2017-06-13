module.exports = function(app, views_router, config){
	var utils = app.get('utils');
	var errcode = app.get('errcode');

	views_router.get('/register', function(req, res) {
        res.sendFile(__dirname + '/register.html');
	});

	// views_router.get([
	// 	'/css/register.css',
	// 	'/register/css/register.css'], // for get /register/
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/css/register.css');
	// });
	//
	// views_router.get([
	// 	'/js/register.js',
	// 	'/register/js/register.js'], // for get /register/
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/js/register.js');
	// });
};
