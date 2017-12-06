import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const postSchema = new Schema({
	title: { type: String, required: true },
	link: String,
	text: String,
	isDeleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	_creator: { type: Schema.ObjectId, ref: 'User' },
	_comments: [{ type: Schema.ObjectId, ref: 'Comment' }]
});

const autoPopulateCreator = function(next) {
	this.populate({
		path: '_creator',
		select: 'username createdAt creator -_id'
	});
	next();
};

postSchema.pre('find', autoPopulateCreator);
const Post = mongoose.model('Post', postSchema);

export default Post;
