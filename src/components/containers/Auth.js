import React, { Component } from 'react'
import { HTTP } from '../../utils'

class Auth extends Component {
  constructor() {
	super()
	this.state = {
	  visitor: {
		username: '',
		password: ''
	  } 
	}
  }

  updateVisitor(attr, event) {
	const updatedVisitor = Object.assign({}, this.state.visitor)
	updatedVisitor[attr] = event.target.value
	
	this.setState({
	  visitor: updatedVisitor
	})
  }

  register(event) {
	event.preventDefault()

	HTTP.post('/auth/register', this.state.visitor)
	.then(data => {
	  console.log('RESPONSE:' + JSON.stringify(data))
	})
	.catch(err => {
	  console.log('ERROR: ' + err.message)
	})

  }

  login(event) {
	event.preventDefault()
	HTTP
	.post('/auth/login', this.state.visitor)
	.then(data => {
	  console.log('RESPONSE: ' + JSON.stringify(data))
	})
	.catch(err => {
	  console.log('ERROR: ' + err.message)
	})

  }


  render() {
	return (
	  <div>

		<div className='container'>
		  <div className='row'>
			<div className='col-md-6'>

			  <h1>Register</h1>
			  <form>
				<input onChange={this.updateVisitor.bind(this, 'username')} className='form-control' type='text' placeholder='Username' /><br />
				<input onChange={this.updateVisitor.bind(this, 'password')} className='form-control' type='password' placeholder='Password' /><br />
				<button onClick={this.register.bind(this)}>Join</button>
			  </form>
			</div>	 	

			<hr />

			<div className='container'>
			  <h1>Login</h1>
			  <form>
				<input onChange={this.updateVisitor.bind(this, 'username')} className='form-control' type='text' placeholder='Username' /><br />
				<input onChange={this.updateVisitor.bind(this, 'password')} className='form-control' type='password' placeholder='Password' /><br />
				<button onClick={this.login.bind(this)}>Log In</button>
			  </form>
			</div>	 	

		  </div>
	    </div>
	  </div>
 	)
  }
}

export default Auth
