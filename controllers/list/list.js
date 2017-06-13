// ---------------------------------------------------------
// MAIN SCREEN (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------

module.exports = function(app, api_router, config){
	var utils = app.get('utils');
	var errcode = app.get('errcode');

	api_router.get('/list', function(req, res) {
		res.status(200).send({
			list_name: "Programing Language",
			list: [
				"C/C++",
				"VB",
				"JAVa",
				"C#",
				"Ruby",
				"ObjC",
				"Swift"
			]
		});
	});
};
