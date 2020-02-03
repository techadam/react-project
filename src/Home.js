import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import heroImg from './assets/hero.svg'
import contactImg from './assets/contact.svg'
import infoImg3 from './assets/info3.svg'

//Components import
import Header from './components/Header'
import Footer from './components/Footer'


class Home extends Component {

	constructor() {
		super();
		props: {}
	}
	
	render() {
		return (
			<div>
				<Header />

			    <div className="row justify-content-center mx-0">

			    	<div className="col-lg-10 col-12">

					    <div className="hero-section pt-5 pb-5">
					        <div className="row justify-content-center">
					            <div className="col-lg-6 col-10 pr-5 hero-caption">
					               	<div className="pt-5 mb-3 hero-title">
					                    <h3 className="text-custom-2">Offer Protection, increase margins</h3>
					                </div>

					                <p className="hero-desc">Turn risk free passive revenue on auto pilot. It only takes four clicks. Turn risk free passive revenue on auto pilot. It only takes four clicks. Turn risk free passive revenue on auto pilot. It only takes four clicks</p>
					                <Link to="/register" class="btn btn-custom px-3 py-2 shadow mr-3">Create account</Link>
					                <Link to="/login" className="btn btn-custom-outline px-3 py-2 shadow">Login to account</Link>
					            </div>
					            <div className="col-lg-6 pl-5 hero-img">
					                <img src={heroImg} alt="" width="100%" />
					            </div>
					        </div>
					    </div>
					 </div>

				</div>

				<div className="info-section pt-5 pb-4 mt-5">
					<div className="row justify-content-center mx-0 mb-5">
						<div className="col-lg-10">
					        <div className="section-head text-center mt-4">
					          <h4 className="text-center text-custom-2 mb-3"><b>Drive passive revenue with a purpose</b></h4>
					          <p className="mb-0">We connect your products with contracts backed by the best underwriters in the industry</p>
					          <p>Install seemlessly, customize your offering and let us optimize your margins</p>
					        </div>

					        <div className="row mt-5">
					        	<div className="col-md-4 col-sm-6 col-12 mb-3">
					        		<div className="card py-4">
									  <img src={infoImg3} className="card-img-top mx-3 mx-auto" style={{width: '80%'}} alt="" />
									  <div className="card-body">
									  	<h5 className="text-center mt-2"><b>Businesses</b></h5>
									    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
									  </div>
									</div>
					        	</div>

					        	<div className="col-md-4 col-sm-6 col-12 mb-3">
					        		<div className="card py-4">
									  <img src={infoImg3} className="card-img-top mx-3 mx-auto" style={{width: '80%'}} alt="" />
									  <div className="card-body">
									  	<h5 className="text-center mt-2"><b>Insurers</b></h5>
									    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
									  </div>
									</div>
					        	</div>

					        	<div className="col-md-4 col-sm-6 col-12 mb-3">
					        		<div className="card py-4">
									  <img src={infoImg3} className="card-img-top mx-3 mx-auto" style={{width: '80%'}} alt="" />
									  <div className="card-body">
									  	<h5 className="text-center mt-2"><b>Customers</b></h5>
									    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
									  </div>
									</div>
					        	</div>
					        </div>
					    </div>
					</div>
			    </div>


			    <div className="contact-section py-5 mt-5">
					<div className="row justify-content-center mx-0 mb-5">
						<div className="col-lg-10">
					        <div className="section-head text-center mt-4">
					          <h4 className="text-center text-custom-2 mb-3"><b>Contact us</b></h4>
					          <p className="mb-0">We are available 24 hrs a day and & 7 days a week</p>
					        </div>

					        <div className="row mt-5">
					        	<div className="col-md-6 col-sm-6 col-12">
					        		<img src={contactImg} className="card-img-top mx-3" style={{width: '80%'}} alt="" />
					        	</div>

					        	<div className="col-md-6 col-sm-6 col-12">
					        		<form>
						        		<div className="form-group">
											<input type="email" className="form-control rounded-0" placeholder="Your Email: e.g example@gmail.com" />
						        		</div>
						        		<div className="form-group">
											<input type="text" className="form-control rounded-0" placeholder="Subject" />
						        		</div>
						        		<div className="form-group">
											<textarea name="" id="" rows="7" className="form-control rounded-0" placeholder="Your Message"></textarea>
						        		</div>
						        		<div className="form-group">
											<button className="btn btn-custom btn-block rounded-0 py-2">Send message</button>
						        		</div>
						        	</form>
					        	</div>
					        </div>
					    </div>
					</div>
			    </div>

			    <Footer />

			</div>
		)
	}
}

export default Home