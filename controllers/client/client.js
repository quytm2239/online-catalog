// ---------------------------------------------------------
// MAIN SCREEN (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
var passwordHash = require('password-hash');
var sequelize = require('./../../dbconnection/mysql/connection');

module.exports = function(app, api_router, config){
	var utils = app.get('utils');
	var errcode = app.get('errcode');
	var ORM = app.get('ORM');

	api_router.post('/login', function(req, res) {
		var username = req.body.username;
		var rawpassword = req.body.password;

		ORM.Account.findOne({ where: {username: username} }).then(account => {
  			// project will be the first entry of the Projects table with the title 'aProject' || null
			if (account) {
				var isMatch = passwordHash.verify(rawpassword, account.dataValues.password);
				if (isMatch) {
					// setup Session
					req.session.username = account.dataValues.username;
					req.session.email = account.dataValues.email;
					req.session.hashedPassword = account.dataValues.password;

					res.status(200).send({
						success: true,
						message: 'Login successfully!'
					});
				} else {
					res.status(400).send({
						success: false,
						message: 'Wrong username or password!'
					});
				}
			} else {
				res.status(400).send({
					success: false,
					message: 'Wrong username or password!'
				});
			}
		});
	});

	api_router.post('/logout', function(req, res) {
		req.session.destroy(function(err) {
	  	// cannot access session here
			res.redirect('/login');
		})
	});

	api_router.post('/register', function(req, res) {

		var email 	 = req.body.email;
		var username = req.body.username;
		var password = req.body.password;
		var full_name = req.body.full_name;
		var gender 	 = req.body.gender;

		// Check email/username
		ORM.Account.findOne({ where:
			{
				$or: [
					{ username: username },
					{ email: email }
				]
			}
		}).then(account => {
			// project will be the first entry of the Projects table with the title 'aProject' || null
			if (account) {
				res.status(400).send({
					success: false,
					message: 'Username or Email already exist!'
				});
			} else {
				// Check full_name
				ORM.Profile.findOne({ where:
					{
						full_name: full_name
					}
				}).then(profile => {

					if (profile) {
						res.status(400).send({
							success: false,
							message: 'Fullname already exist!'
						});
					} else {
						var hashedPassword = passwordHash.generate(password);

						sequelize.transaction(function (t) {
							// chain all your queries here. make sure you return them.
							return ORM.Account.create({
								email: email,
								username: username,
								password: hashedPassword
							}, {transaction: t}).then(function (account) {
								return ORM.Profile.create({
									full_name: full_name,
									gender: parseInt(gender),
									account_id: account.dataValues.id
								}, {transaction: t});
							});
						}).then(function (result) {
						// Transaction has been committed
						// result is whatever the result of the promise chain returned to the transaction callback
							res.status(200).send({
								success: true,
								message: 'Register successfully!'
							});
						}).catch(function (err) {
						// Transaction has been rolled back
						// err is whatever rejected the promise chain returned to the transaction callback
							res.status(500).send({
								success: false,
								message: 'Something went wrong, please try again!'
							});
						});
					}
				});
			}
		});

		// ORM.Account.create({ username: username, password: hashedPassword }).then(savedAccount => {
		//   // you can now access the newly created task via the variable task
		//   res.status(200).send({message:savedAccount});
		//  	});

		// ORM.Account.bulkCreate([
		//   { username: username, password: hashedPassword }
		// ]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
		//   return ORM.Account.findAll();
		//  	}).then(account => {
		//   console.log(account) // ... in order to get the array of user objects
		//   res.redirect('/login');
		// })
	});
};
