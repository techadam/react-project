import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Header from './components/Header'
import axios from 'axios'
import Swal from 'sweetalert2'
import ReactLoading from 'react-loading'


class Profile extends Component {

	constructor() {
		super();
		props: {}

		this.state = {
			loggedIn: true,
			user: {},
			loading: true,
		}

		this.apiUrl = `https://5e367357f7e55d0014ad516a.mockapi.io`
	}

	async componentDidMount() {
		const user = JSON.parse(localStorage.getItem('user'))
		const loggedIn = localStorage.getItem('loggedIn')
		//console.log(user)
		let flag = true

		if((user === null || user === undefined)) {
			flag = false
			window.location.href = '/login'
			return
		}

		//Get user details
		const response = await axios.get(`${this.apiUrl}/users/${user.id}`)
		if(response.status !== 200) {
			flag = false
		}

		this.setState({
			loggedIn: flag,
			user: response.data,
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

		console.log(this.state.user)
	}

	readImgUrl() {
		const self = this

		let inputFile = document.querySelector("#profileImgInput").files

		if((parseInt(inputFile[0].size) / 1000) > 200) {
            Swal.fire({
			  title: 'Warning!',
			  text: 'Image must not be more than 200 Kilobyte',
			  icon: 'warning',
			  confirmButtonText: 'Close'
			})
            return
        }


        if(inputFile && inputFile[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                //e.target.result
                document.querySelector("#profileImg").src = e.target.result

                const user = self.state.user
                user.image = e.target.result

                self.setState({
                	user: user
                })
            };
            reader.readAsDataURL(inputFile[0]);
        }
    }

	async updateUser() {
		const userId = this.state.user.id

		const {user} = {...this.state}

		if(!user.email || !user.password || !user.name || !user.phone || !user.dob) {
			Swal.fire({
			  title: 'Error!',
			  text: 'All fields required',
			  icon: 'error',
			  confirmButtonText: 'Close'
			})
			return
		}

		if(this.state.user === null) {
			this.setState({
				loggedIn: false
			})
		}

		this.setState({
			loading: true,
		})

		const response = await axios.put(`${this.apiUrl}/users/${userId}`, this.state.user)
		console.log(response.data)

		localStorage.setItem('user', JSON.stringify(response.data))
		this.setState({
			user: response.data,
			loading: false,
		})

		Swal.fire({
		  title: 'Success!',
		  text: 'Profile successfully updated',
		  icon: 'success',
		  confirmButtonText: 'Close'
		})
	}

	logout() {
		localStorage.removeItem('user')
		localStorage.removeItem('loggedIn')
		this.setState({
			loggedIn: false
		})
	}
	
	render() {
		if(!this.state.loggedIn) {
			return <Redirect to="/login" />
		}

		return (
			<div>
				<Header loggedIn={this.state.loggedIn} logout={this.logout.bind(this)} borderBottom="border-bottom" />

				<main className="py-5">
					<div className="row justify-content-center mx-0 px-0">
						<div className="col-lg-10">
							<div className="row">
								<div className="col-lg-2 text-center">
									<img src={this.state.user.image} height="140px" width="140px" id="profileImg" className="mx-auto" /> 
									<div>
										<label className="btn btn-custom mt-2" for="profileImgInput">Upload <i className="ti-pencil"></i></label>

										<input type="file" style={{display: 'none'}} name="image" id="profileImgInput" onChange={this.readImgUrl.bind(this)} />
									</div>
								</div>

								<div className="col-lg-10">
									<h5 className="mb-4"><b>Welcome</b> {this.state.user.name}</h5>
									<form className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<label>Name</label>
												<input type="text" name="name" className="form-control rounded-0" onChange={this.handleEvent.bind(this)} value={this.state.user.name} placeholder="Full name" />
											</div>

											<div className="form-group">
												<label>Phone</label>
												<input type="text" name="phone" onChange={this.handleEvent.bind(this)} value={this.state.user.phone} className="form-control rounded-0" placeholder="Phone number" />
											</div>

											<div className="form-group">
												<label>Date of birth</label>
												<input type="date" name="dob" onChange={this.handleEvent.bind(this)} className="form-control rounded-0" value={this.state.user.dob} placeholder="Date of birth" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<label>Email</label>
												<input type="email" name="email" onChange={this.handleEvent.bind(this)} value={this.state.user.email} className="form-control rounded-0" placeholder="example@yahoo.com" />
											</div>

											<div className="form-group">
												<label>Password</label>
												<input type="password" name="password" onChange={this.handleEvent.bind(this)} value={this.state.user.password} className="form-control rounded-0" placeholder="********" />
											</div>

											<div className="form-group">
												<label>Address</label>
												<textarea className="form-control rounded-0" name="address" onChange={this.handleEvent.bind(this)} placeholder="Your address" value={this.state.user.address}></textarea>
											</div>
										</div>

										<div class="col-lg-12">
											<h6 className="border-bottom my-3 pb-2"><b>Security Questions</b></h6>
											<div class="row">
												<div class="col-lg-6">
													<div className="form-group">
														<label>What is your favorite food?</label>
														<input type="text" name="sec_que_1" onChange={this.handleEvent.bind(this)} value={this.state.user.sec_que_1} className="form-control rounded-0" placeholder="Your answer" />
													</div>

													<div className="form-group">
														<label>What is your favorite hobby?</label>
														<input type="text" name="sec_que_2" onChange={this.handleEvent.bind(this)} value={this.state.user.sec_que_2} className="form-control rounded-0" placeholder="Your answer" />
													</div>
												</div>
												<div class="col-lg-6">
													<div className="form-group">
														<label>What college did you attend?</label>
														<input type="text" name="sec_que_3" onChange={this.handleEvent.bind(this)} value={this.state.user.sec_que_3} className="form-control rounded-0" placeholder="Your answer" />
													</div>
												</div>
											</div>

											<div className="mx-auto" style={{display: 'flex', justifyContent: 'center'}}>
												{
													this.state.loading &&
													<ReactLoading type='balls' color='#00ccff' height={100} width={100} />
												}
											</div>


											<button type="button" class="btn btn-custom btn-block mt-3" onClick={this.updateUser.bind(this)}>Update profile</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		)
	}
}

export default Profile