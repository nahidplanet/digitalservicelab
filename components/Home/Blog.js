import Link from 'next/link';
import React from 'react';
import Slider from "react-slick";


const Blog = ({ data }) => {
	const posts = data.slice(-9).reverse();
	var settings = {
		dots: false,
		prevArrow: <></>,
		nextArrow: <></>,
		speed: 800,
		initialSlide: 0,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		pauseOnHover: true,
		autoplay: false,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [

			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 10,
					dots: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 10,
					dots: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					autoplaySpeed: 2000,
				}
			}
		]
	};
	return (
		<div id="blog" className="our-blog section d-block">
			<div className="services-right-dec">
				<img src="assets/images/services-right-dec.png" alt="pic" />
			</div>
			<div className="container">
				<div className="services-left-dec">
					<img src="assets/images/services-left-dec.png" alt="pic" />
				</div>
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<div className="section-heading">
							<h2> <em>Blog Post</em> The Best Service With <span>Blog Post</span></h2>
							<span>New Post</span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 ">
						<Slider {...settings} className="overflow-hidden">
							{
								posts?.map(post => <div key={post.id} className="item border" >
									<article>
										<div>
											<Link href={`/blog/${post.id}`} passHref>
												<img src="https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049__480.jpg" alt={post.title} />
											</Link>
										</div>
										<div className='post-body'>
											<div>
												<header>
													<Link href={`/blog/${post.id}`} passHref>
														<h5>{post.title.length < 30 ? post.title : post.title.slice(0, 30) + " ..."}</h5>
													</Link>
												</header>
											</div>
											<div>
												<p>{post.body.length < 120 ? post.body : post.body.slice(0, 120) + "...More"}</p>
											</div>
											<footer className='d-flex align-items-end flex-column'>
												<div className=' d-flex justify-content-between align-items-center w-100'>
													<p>Posted: john Tom.</p>
													<p>11 may 2022</p>
												</div>
											</footer>
										</div>
									</article>
								</div>)
							}
							<div className="item border" >
								<div className='morePost-container border'>
									<Link href={"/blog/"} passHref>
										<h1 className='morePost rounded-circle'> see more </h1>
									</Link>
								</div>
							</div>
						</Slider>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;