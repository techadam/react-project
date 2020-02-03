import React, {Component} from 'react'
import { Redirect, Link } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import ReactLoading from 'react-loading'

//Components import 


class Login extends Component {

	constructor() {
		super();
		props: {}

		this.state = {
			loggedIn: false,
			users: [],
			email: '',
			password: '',
			loading: true,
		}

		this.apiUrl = `https://5e367357f7e55d0014ad516a.mockapi.io`
	}

	async componentDidMount() {
		const user = JSON.parse(localStorage.getItem('user'))
		const loggedIn = localStorage.getItem('loggedIn')
		let flag = false

		if((user !== null || user !== undefined) && parseInt(loggedIn) === 1) {
			flag = true
		}

		const response = await axios.get(`${this.apiUrl}/users`)
		
		this.setState({
			users: response.data,
			loggedIn: flag,
			loading: false,
		})
	}

	handleEvent(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	login() {
		if(this.state.users.length < 1) {
			Swal.fire({
			  title: 'Error!',
			  text: 'User account not found',
			  icon: 'error',
			  confirmButtonText: 'Close'
			})
			return
		}

		let notFound = false

		if(!this.state.email || !this.state.password) {
			Swal.fire({
			  title: 'Error!',
			  text: 'All fields required',
			  icon: 'error',
			  confirmButtonText: 'Close'
			})
			return
		}

		this.state.users.map(user => {
			if(user.email === this.state.email && user.password === this.state.password) {
				localStorage.setItem('loggedIn', 1)
				localStorage.setItem('user', JSON.stringify(user))
				notFound = true
				return
			}
		})

		if(!notFound) {
			Swal.fire({
			  title: 'Error!',
			  text: 'Invalid login credentials',
			  icon: 'error',
			  confirmButtonText: 'Close'
			})
			return
		}else{
			//Route user to profile page
			console.log("loggedIn")
			this.setState({
				loggedIn: true
			})
		}
	}
	
	render() {
		if (this.state.loggedIn) {
		    return <Redirect to="/profile" />
		}

		return (
			<div className="fullpage">
				<div className="row mx-0">
					<div className="col-lg-5 col-sm-0 login-hero-img"></div>
					<div className="col-lg-7 col-sm-12 px-5 py-5 login-content">
						<h4 className="text-custom"><b>Clyne</b></h4>

						<div className="mt-4">
							<h3>Sign into your account</h3>
							<span className="text-muted">Login your credentials to access your profile</span>
						</div>

						<form className="mt-3">
							<div className="form-group">
								<label>Email</label>
								<input type="email" name="email" onChange={this.handleEvent.bind(this)} value={this.state.email} className="form-control rounded-0" placeholder="example@yahoo.com" />
							</div>

							<div className="form-group">
								<label>Password</label>
								<input type="password" name="password" onChange={this.handleEvent.bind(this)} value={this.state.password} className="form-control rounded-0" placeholder="*********" />
							</div>

							<div className="form-group">
								<button type="button" onClick={this.login.bind(this)} className="btn btn-custom btn-block rounded-0">Sign in</button>
								<Link to="/register" className="btn btn-custom-outline btn-block rounded-0">Create account</Link>
							</div>

							<div className="mx-auto" style={{display: 'flex', justifyContent: 'center'}}>
								{
									this.state.loading &&
									<ReactLoading type='balls' color='#00ccff' height={100} width={100} />
								}
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login