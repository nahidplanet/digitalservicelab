import React from 'react';
import Slider from "react-slick";

const Testimonials = () => {
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
		<div id="portfolio" className="our-portfolio section">
			<div className="portfolio-left-dec">
				<img src="assets/images/portfolio-left-dec.png" alt="" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<div className="section-heading">
							<h2>Our Recent <em>Projects</em> &amp; Case Studies <span>for Clients</span></h2>
							<span>Our Portfolio</span>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="owl-carousel owl-portfolio">
							<Slider  {...settings} className="">
								<div className="item border rounded shadow-sm p-3">
									<h4>Learn More about our Guidelines</h4>
									<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
									<p>Feel free to use this template for your business</p>
								</div>
								<div className="item border rounded shadow-sm p-3">
									<h4>Learn More about our Guidelines</h4>
									<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
									<p>Feel free to use this template for your business</p>
								</div>
								<div className="item border rounded shadow-sm p-3">
									<h4>Learn More about our Guidelines</h4>
									<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
									<p>Feel free to use this template for your business</p>
								</div>
								<div className="item border rounded shadow-sm p-3">
									<h4>Learn More about our Guidelines</h4>
									<div className="icon"><img src="assets/images/service-icon-01.png" alt="pic" /></div>
									<p>Feel free to use this template for your business</p>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;