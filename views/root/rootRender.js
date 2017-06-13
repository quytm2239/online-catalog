module.exports = function(app, views_router, config){
	var utils = app.get('utils');
	var errcode = app.get('errcode');
	views_router.get('/', function(req, res) {
        res.sendFile(__dirname + '/root.html');
	});

	views_router.get('/topband', function(req, res) {
		res.sendFile(__dirname + '/topband.html');
	});

	views_router.get('/bottomband', function(req, res) {
		res.sendFile(__dirname + '/bottomband.html');
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
