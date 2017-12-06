import db from './../models';

const userController = {};

userController.post = (req, res) => {
	const { username, password } = req.body;
	// Validation
	const user = new db.User({
		username,
		password
	});
	user
		.save()
		.then(newUser => {
			res.status(200).json({ success: true, message: newUser });
		})
		.catch(err => {
			res.status(500).json({
				success: false,
				message: err
			});
		});
};

export default userController;
