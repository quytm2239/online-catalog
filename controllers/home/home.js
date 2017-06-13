var path = require('path');
var mime = require('mime');
var fs = require('fs');

module.exports = function(app, api_router, config){
	var utils = app.get('utils');
	var errcode = app.get('errcode');

	api_router.get('/download', function(req, res) {

		// res.download(app.get('download-folder') + '/Alan Walker - Fade [NCS Release].mp3', 'Alan Walker - Fade [NCS Release].mp3', function(err){
		// 	if (err) {
		// 	// Handle error, but keep in mind the response may be partially-sent
		// 	// so check res.headersSent
		// 		console.log(err);
		// 	} else {
		// 	// decrement a download credit, etc.
		// 		console.log('Download completed: ' + 'Alan Walker - Fade [NCS Release].mp3');
		// 	}
		// });

		res.sendFile(app.get('download-folder') + '/Alan Walker - Fade [NCS Release].mp3');

		// var file = app.get('download-folder') + '/Alan Walker - Fade [NCS Release].mp3';
		//
		// var filename = path.basename(file);
		// var mimetype = mime.lookup(file);
		//
		// res.setHeader('Content-disposition', 'attachment; filename=' + filename);
		// res.setHeader('Content-type', mimetype);
		//
		// var filestream = fs.createReadStream(file);
		// filestream.pipe(res);
	});
};
