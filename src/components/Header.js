import React from 'react'

const Header = (props) => {
	return (
		<header className={props.borderBottom + ' container-fluid'}>
	      <div className="row justify-content-center pt-3">
	        <div className="col-lg-10 custom-flex">
	          <h4 className="brand text-custom">Clyne</h4>
	          
	          <input type="checkbox" id="brandcheckBox" />
	          <ul className="brand-menu">
	          	<li className="close-menu"><label for="brandcheckBox">x</label></li>
	            <li><a href="/">Home</a></li>
	            {
		        	!props.loggedIn && 
		        	<React.Fragment>
		        		<li><a href="/register" className="">Signup</a></li>
		            	<li><a href="/login" className="btn btn-custom px-5 text-white">Login</a></li>
		        	</React.Fragment>
		        }

		        {
		        	props.loggedIn && 
		        	<React.Fragment>
		        		<li><button onClick={props.logout} className="btn btn-custom px-5 text-white">Logout</button></li>
		        	</React.Fragment>
		        }
	          </ul>

	          <label for="brandcheckBox" className="brandcheckLabel"><span className="ti-menu"></span></label>

	        </div>
	      </div>
	    </header>
	)
}

export default Header