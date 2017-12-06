import db from './../models';

const commentController = {};

commentController.post = (req, res) => {
	const { text, postId, userId } = req.body;

	// Validation
	const comment = new db.Comment({
		text,
		_creator: userId,
		_post: postId
	});

	comment
		.save()
		.then(newComment => {
			db.Post.findByIdAndUpdate(postId, {
				$push: { _comments: newComment._id }
			})
				.then(existingPost => {
					res.status(200).json({
						success: true,
						message: existingPost
					});
				})
				.catch(err => {
					res.status(500).json({
						success: false,
						message: err
					});
				});
			res.status(200).json({
				success: true,
				message: newComment
			});
		})
		.catch(err => {
			res.status(500).json({
				success: false,
				message: err
			});
		});
};

export default commentController;
