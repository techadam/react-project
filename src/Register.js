import React, {Component} from 'react'

//Components import 
import axios from 'axios'
import Swal from 'sweetalert2'
import ReactLoading from 'react-loading'


class Register extends Component {

	constructor() {
		super();
		props: {}

		this.state = {
			users: [],
			user: {
				name: '',
				email: '',
				password: '',
				phone: '',
				dob: '',
				address: '',
				sec_que_1: '',
				sec_que_2: '',
				sec_que_3: '',
			},
			loading: true,
		}

		this.apiUrl = `https://5e367357f7e55d0014ad516a.mockapi.io`
	}

	async componentDidMount() {
		const response = await axios.get(`${this.apiUrl}/users`)
		this.setState({
			users: response.data,
			loading: false,
		})
	}

	handleEvent(event) {
		const { user } = {...this.state};
		const currentState = user;

		currentState[event.target.name] = event.target.value

		this.setState({
			user: currentState
		})

		//console.log(this.state.user)
	}

	async register() {
		let Found = false

		this.state.users.map(user => {
			if(user.email === this.state.user.email || user.phone === this.state.user.phone) {
				localStorage.setItem('loggedIn', 1)
				localStorage.setItem('user', JSON.stringify(user))
				Found = true
				return
			}
		})

		if(Found) {
			Swal.fire({
			  title: 'Error!',
			  text: 'You have previously signed up. Please login to continue',
			  icon: 'error',
			  confirmButtonText: 'Close'
			})
			return
		}

		this.setState({
			loading: true
		})

		//Create account for user
		const response = await axios.post(`${this.apiUrl}/users`, this.state.user)
		//console.log(response.data)

		const users = this.state.users
		users.push(response.data)

		this.setState({
			users: users,
			user: {
				name: '',
				email: '',
				password: '',
				phone: '',
				dob: '',
				address: '',
			},
			loading: false,
		})

		Swal.fire({
		  title: 'Success!',
		  text: 'Account successfully created. Login to continue',
		  icon: 'success',
		  confirmButtonText: 'Close'
		})
	}
	
	render() {
		return (
			<div className="fullpage">
				<div className="row mx-0">
					<div className="col-lg-5 col-sm-0 login-hero-img"></div>
					<div className="col-lg-7 col-sm-12 px-5 pt-5 login-content">
						<h4 className="text-custom"><b>Clyne</b></h4>

						<div className="mt-4">
							<h3>Create new account</h3>
							<span className="text-muted">Use your account to create email. its free</span>
						</div>

						<form className="mt-3" autocomplete="off">
							<div className="form-group">
								<label>Name</label>
								<input type="text" name="name" className="form-control rounded-0" onChange={this.handleEvent.bind(this)} value={this.state.user.name} placeholder="Full name" />
							</div>

							<div className="form-group">
								<label>Email</label>
								<input type="email" name="email" onChange={this.handleEvent.bind(this)} value={this.state.user.email} className="form-control rounded-0" placeholder="example@yahoo.com" />
							</div>

							<div className="form-group">
								<label>Password</label>
								<input type="password" name="password" onChange={this.handleEvent.bind(this)} value={this.state.user.password} className="form-control rounded-0" placeholder="********" />
							</div>

							<div className="form-group">
								<label>Phone</label>
								<input type="text" name="phone" onChange={this.handleEvent.bind(this)} value={this.state.user.phone} className="form-control rounded-0" placeholder="Phone number" />
							</div>

							<div className="form-group">
								<label>Date of birth</label>
								<input type="date" name="dob" onChange={this.handleEvent.bind(this)} className="form-control rounded-0" value={this.state.user.dob} placeholder="Date of birth" />
							</div>

							<div className="form-group">
								<label>Address</label>
								<textarea className="form-control rounded-0" name="address" onChange={this.handleEvent.bind(this)} placeholder="Your address">{this.state.user.address}</textarea>
							</div>

							<div className="mx-auto" style={{display: 'flex', justifyContent: 'center'}}>
								{
									this.state.loading &&
									<ReactLoading type='balls' color='#00ccff' height={100} width={100} />
								}
							</div>

							<div className="form-group">
								<button type="button" className="btn btn-custom btn-block rounded-0" onClick={this.register.bind(this)}>Create account</button>
								<a href="/login" className="btn btn-custom-outline btn-block rounded-0">Login</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Register