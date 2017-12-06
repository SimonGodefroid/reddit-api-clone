import db from '../models';
const postController = {};
postController.createPost = (req, res) => {
	const { title, text, link, userId } = req.body;
	const post = new db.Post({
		title,
		text,
		link,
		_creator: userId
	});
	post
		.save()
		.then(newPost => {
			return res.status(200).json({ success: true, message: newPost });
		})
		.catch(err => {
			return res.status(500).json({ success: false, message: err });
		});
};
postController.getAll = (req, res) => {
	db.Post.find({})
		.populate({ path: '_creator', select: 'username -_id' })
		.populate({ path: '_comments', select: 'text' })
		.then(posts => {
			return res.status(200).json({ success: true, message: posts });
		})
		.catch(err => {
			return res.status(500).json({ success: false, message: err });
		});
};
export default postController;
