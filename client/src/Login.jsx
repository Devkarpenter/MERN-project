import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Login = ()  => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g. send data to backend API
        console.log(formData);
        // Reset form fields after submission
        setFormData({
          username: '',
          email: '',
          password: ''
        });
      };

    return (
    <div className="d-flex justify-content-center align-items-center bg-secondary  vh-100">
    <div className="login-form row justify-content-center w-50" >
      <div className="col-md-6 ">
        <div className="card shadow-lg">
          <div className="card-body">
            <h3 className="card-title md-4 text-center ">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label mt-4">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder='Enter name'
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label ">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder='Enter password'
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success btn-block w-100 mt-2 mb-2">Log in</button>
              </form>
              
              
              
          </div>
        </div>
      </div>
    </div>
  </div>
);
  }

export default Login;




