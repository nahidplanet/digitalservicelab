import React from 'react';
import Slider from "react-slick";


const Blog = () => {
	var settings = {
		dots: false,
		prevArrow: <></>,
		nextArrow: <></>,
		speed: 800,
		initialSlide: 0,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [

			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
		<div id="blog" className="our-services section d-block">
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
					<div className="col-lg-12">
						<Slider {...settings} className="">
							<div className="item">
								<h4>Learn More about our Guidelines</h4>
								<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
								<p>Feel free to use this template for your business</p>
							</div>
							<div className="item">
								<h4>Learn More about our Guidelines</h4>
								<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
								<p>Feel free to use this template for your business</p>
							</div>
							<div className="item">
								<h4>Learn More about our Guidelines</h4>
								<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
								<p>Feel free to use this template for your business</p>
							</div>
							<div className="item">
								<h4>Learn More about our Guidelines</h4>
								<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
								<p>Feel free to use this template for your business</p>
							</div>
							<div className="item">
								<h4>Learn More about our Guidelines</h4>
								<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
								<p>Feel free to use this template for your business</p>
							</div>
							<div className="item">
								<h4>Learn More about our Guidelines</h4>
								<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
								<p>Feel free to use this template for your business</p>
							</div>


						</Slider>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;