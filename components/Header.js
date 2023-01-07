import React from 'react';
import logo from '../public/assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {

	return (
		<div>

			{/* <!-- ***** Header Area Start ***** --> */}
			<header className="header-area header-sticky  wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<nav className="main-nav">
								{/* <!-- ***** Logo Start ***** --> */}
								<Link href="/" className="logo">
									<Image src={logo} alt={"digital service lab"} width="94" height="44" />

								</Link>
								{/* <!-- ***** Logo End ***** --> */}
								{/* <!-- ***** Menu Start ***** --> */}
								<ul className="nav">
									<li className="scroll-to-section"><Link href="#top" className="active">Home</Link></li>
									<li className="scroll-to-section"><a href="#services">Services</a></li>
									<li className="scroll-to-section"><a href="#blog">Blog</a></li>
									<li className="scroll-to-section"><Link href="#about">About</Link></li>
									<li className="scroll-to-section"><a href="#portfolio">Testimonials</a></li>
									<li className="scroll-to-section"><a href="#pricing">Pricing</a></li>
									<li className="scroll-to-section"><div className="main-red-button-hover"><a href="#contact">Contact Us Now</a></div></li>
								</ul>
								<a className='menu-trigger'>
									<span>Menu</span>
								</a>
								{/* <!-- ***** Menu End ***** --> */}
							</nav>
						</div>
					</div>
				</div>
			</header>
			{/* <!-- ***** Header Area End ***** --> */}
		</div>
	);
};

export default Header;