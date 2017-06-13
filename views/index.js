module.exports = function(app, views_router, config){
	console.log('->*<- [START] Load Views ->*<-');

	require('./root/rootRender')(app, views_router, config);
	console.log('1. root is loaded');

	require('./register/registerRender')(app, views_router, config);
	console.log('2. register is loaded');

	require('./login/loginRender')(app, views_router, config);
	console.log('3. loginRender is loaded');

	require('./main/mainRender')(app, views_router, config);
	console.log('4. mainRender is loaded');

	require('./list/listRender')(app, views_router, config);
	console.log('5. listRender is loaded');
};
