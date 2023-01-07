
import DB from "../../../Database/connection"
import Blog from "../../../Database/blog.schema"

const createBlog = async (req, res) => {
	try {
		// DB().catch(error=>console.log(error));
		// const blog = await Blog.create(
		// 	{
		// 		title: "blog title 2",
		// 		description: "this is blog description",
		// 		image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
		// 		category: "offer",

		// 	}
		// );
		// if (!blog) {
		// 	res.status(400).json({status:false,message:"Blog create failed"})
		// }else{
		// 	res.status(200).json({status:true,blog})

		// }
	} catch (error) {
		console.log(error);
	}
}
export default createBlog;