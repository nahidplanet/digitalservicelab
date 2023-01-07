

const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, "blog title is required"],
		trim: true,
	},
	description: {
		type: String,
		required: [true, "blog description is required"],
		trim: true,
	},
	image: {
		type: String,
		required: [true, "blog image is required"],
		trim: true,
	},
	category: {
		type: String,
		required: [true, "blog category is required"],
		trim: true,
		enum: ["offer", "rating", "review", "google-voice", "gmail-account", "web-design", "seo", "graphics-design"]
	},
	status: {
		type: String,
		trim: true,
		enum: ["active", "inactive"],
		default: "active"
	},
	writer: {
		type: String,
		trim: true,
		default: "Author"
	},
	date:Date
}, {
	timestamps: true
})
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default Blog;