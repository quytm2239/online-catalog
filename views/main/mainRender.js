module.exports = function(app, views_router, config){
	var utils = app.get('utils');
	var errcode = app.get('errcode');
	var auth = app.get('check_session');
	views_router.get('/main', auth, function(req, res) {
        res.sendFile(__dirname + '/main.html');
	});

	// views_router.get([
	// 	'/css/main.css',
	// 	'/main/css/main.css'], // for get /main/
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/css/main.css');
	// });
	//
	// views_router.get([
	// 	'/js/main.js',
	// 	'/main/js/main.js'], // for get /main/
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/js/main.js');
	// });
};
