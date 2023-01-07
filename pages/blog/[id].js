import { useRouter } from 'next/router';
import React from 'react';

const BlogDetails = ({ data }) => {
	return (
		<div>
			<h1>bkjbj</h1>
			<h1>bkjbj</h1>
			<h1>bkjbj</h1>
			<h1>{data.id}</h1>
			<h1>{data.title}</h1>
			<p>{data.body}</p>
			
		</div>
	);
};

export async function getStaticProps(ctx) {
	const { params } = ctx;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
	const data = await res.json();
	return {
		props: {
			data: data
		}
	}
}
export async function getStaticPaths() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await res.json();
	const paths = data.map(post => {
		return {
			params:{id:`${post.id}`}
		}
	});
	return {
		paths,
		fallback: false, // can also be true or 'blocking'
	}
}


export default BlogDetails;