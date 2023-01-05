import React from 'react';
import Slider from "react-slick";


const HeroSection = () => {
	var settings = {
		dots: false,
		prevArrow: <></>,
		nextArrow: <></>,
		speed: 800,
		initialSlide: 0,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [

			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					autoplaySpeed: 2500,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					autoplaySpeed: 2500,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					autoplaySpeed: 2500,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					autoplaySpeed: 2500,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					autoplaySpeed: 2500,
				}
			}
		]
	};
	return (
		<div className="main-banner" id="top" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							<div className="col-lg-6 align-self-baseline overflow-hidden ">
								<div className="owl-carousel owl-banner">
									<Slider {...settings} className="w">
										<div className="item header-text">
											<h6>Welcome to Onix Digital</h6>
											<h2>Build <em>your website</em> the best in <span>SEO</span>?</h2>
											<p>This is a professional looking HTML Bootstrap 5 website template brought to you by TemplateMo website.</p>
											<div className="down-buttons">
												<div className="main-blue-button-hover">
													<a href="#contact">Message Us Now</a>
												</div>
												<div className="call-button">
													<a href="#"><i className="fa fa-phone"></i> 010-020-0340</a>
												</div>
											</div>
										</div>
										<div className="item header-text">
											<h6>Online Marketing</h6>
											<h2>Get the <em>best ideas</em> for <span>your website</span></h2>
											<p>You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites. Contact us for more info. Thank you.</p>
											<div className="down-buttons">
												<div className="main-blue-button-hover">
													<a href="#services">Our Services</a>
												</div>
												<div className="call-button">
													<a href="#"><i className="fa fa-phone"></i> 090-080-0760</a>
												</div>
											</div>
										</div>
										<div className="item header-text">
											<h6>Video Tutorials</h6>
											<h2>Watch <em>our videos</em> for your <span>projects</span></h2>
											<p>Please support a little via PayPal if this digital marketing HTML template is useful for you. Thank you.</p>
											<div className="down-buttons">
												<div className="main-blue-button-hover">
													<a href="#video">Watch Videos</a>
												</div>
												<div className="call-button">
													<a href="#"><i className="fa fa-phone"></i> 050-040-0320</a>
												</div>
											</div>
										</div>
									</Slider>
									{/* <HeroCarousel></HeroCarousel> */}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;