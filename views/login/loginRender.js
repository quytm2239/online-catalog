module.exports = function(app, views_router, config){
	var utils = app.get('utils');
	var errcode = app.get('errcode');

	views_router.get('/login', function(req, res) {
	    var error = req.query.error;
        if (utils.chkObj(error)) {
			if (error == '0') {
				res.sendFile(__dirname + '/login_' + error + '.html');
			} else {
				res.sendFile(__dirname + '/login.html');
			}
        } else {
            res.sendFile(__dirname + '/login.html');
        }
	});

	// views_router.get([
	// 	'/css/login.css',
	// 	'/login/css/login.css'],
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/css/login.css');
	// });
	//
	// views_router.get([
	// 	'/js/login.js',
	// 	'/login/js/login.js'],
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/js/login.js');
	// });
};
