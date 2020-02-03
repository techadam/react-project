import React from 'react'

const Footer = () => {
	return (
		<footer className="pt-2 pb-5 mt-5">
			<div className="row justify-content-center mx-0 mb-5">
				<div className="col-lg-10">
			        <div className="row mt-5">
			        	<div className="col-md-3 col-sm-6 col-12 mb-4">
			        		<h3>Clyne</h3>
			        		<p>Connect with us on our social handles</p>
			        		<div>
			        			<a href="/" className="text-white"><i className="ti-facebook"></i></a>
			        			<a href="/" className="text-white ml-3"><i className="ti-instagram"></i></a>
			        			<a href="/" className="text-white ml-3"><i className="ti-linkedin"></i></a>
			        		</div>
			        	</div>

			        	<div className="col-md-3 col-sm-6 col-12 mb-4">
			        		<h6>COMPANY</h6>
			        		<ul className="footer-menu">
			        			<li><a href="">Home</a></li>
								<li><a href="">About</a></li>
								<li><a href="">Create account</a></li>
								<li><a href="">Login</a></li>
			        		</ul>
			        	</div>

			        	<div className="col-md-3 col-sm-6 col-12 mb-4">
			        		<h6>HELP</h6>
			        		<ul className="footer-menu">
								<li><a href="">Email Us</a></li>
								<li><a href="">FAQs</a></li>
			        		</ul>
			        	</div>

			        	<div className="col-md-3 col-sm-6 col-12 mb-4">
			        		<h6>QUICK LINKS</h6>
			        		<ul className="footer-menu">
								<li><a href="">Home</a></li>
								<li><a href="">About</a></li>
								<li><a href="">Create account</a></li>
								<li><a href="">Login</a></li>
			        		</ul>
			        	</div>
			        </div>
			    </div>
			</div>
	    </footer>
	)
}

export default Footer