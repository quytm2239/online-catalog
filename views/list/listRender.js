module.exports = function(app, views_router, config){
	var utils = app.get('utils');
	var errcode = app.get('errcode');
	var auth = app.get('check_session');
	views_router.get('/list', auth, function(req, res) {
        res.sendFile(__dirname + '/list.html');
	});

	// views_router.get([
	// 	'/css/list.css',
	// 	'/list/css/list.css'],
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/css/list.css');
	// });
	//
	// views_router.get([
	// 	'/js/list.js',
	// 	'/list/js/list.js'],
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/js/list.js');
	// });
};
