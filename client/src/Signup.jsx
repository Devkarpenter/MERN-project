// SignupForm.js
import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const Signup = () => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault(); 
  
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(response => {
        console.log('Successful registration:', response.data);
        alert('Successful registration:')
        // Handle success, such as redirecting to another page or showing a success message
      })
      .catch(error => {
        console.error('Registration error:', error);
        // Handle error, such as displaying an error message to the user
      });
  }
  

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary   vh-100">
      <div className="login-form row justify-content-center w-75 ">
        <div className="col-md-6 ">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title md-4 text-center ">Sign Up</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label mt-4">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder='Enter name'
                    id="username"
                    name="username"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder='Enter email'
                    id="email"
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label ">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder='Enter password'
                    id="password"
                    autoComplete=''
                    name="password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block w-100">Sign Up</button>
                </form>
                <p className='pt-2'>Already Have an Account</p>
                
                <Link to= '/login' className='btn border-black btn-block w-100'>
                  Login
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
