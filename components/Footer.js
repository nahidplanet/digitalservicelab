import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../public/assets/images/logo.png";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						<div className="about footer-item">
							<div className="logo">
								<Link href="#">
									<Image src={logo} alt="njk" width='94' height="44" />

								</Link>
							</div>
							<a href="#">info@company.com</a>
							<ul>
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-behance"></i></a></li>
								<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="services footer-item">
							<h4>Services</h4>
							<ul>
								<li><a href="#">SEO Development</a></li>
								<li><a href="#">Business Growth</a></li>
								<li><a href="#">Social Media Managment</a></li>
								<li><a href="#">Website Optimization</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="community footer-item">
							<h4>Community</h4>
							<ul>
								<li><a href="#">Digital Marketing</a></li>
								<li><a href="#">Business Ideas</a></li>
								<li><a href="#">Website Checkup</a></li>
								<li><a href="#">Page Speed Test</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="subscribe-newsletters footer-item">
							<h4>Subscribe Newsletters</h4>
							<p>Get our latest news and ideas to your inbox</p>
							<form action="#" method="get">
								<input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
								<button type="submit" id="form-submit" className="main-button "><i className="fa fa-paper-plane-o"></i></button>
							</form>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="copyright">
							<p>Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved.
								<br />
								Designed by <a rel="nofollow" href="https://templatemo.com" title="free CSS templates">TemplateMo</a></p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;