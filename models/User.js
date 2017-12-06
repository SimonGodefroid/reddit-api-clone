import mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minlength: [5, 'Username must be 5 characters or more.']
	},
	password: {
		type: String,
		required: true,
		minlength: [5, 'Password must be 5 characters or more.']
	}
});

// Write some encryption for Password
const User = mongoose.model('User', userSchema);

export default User;
