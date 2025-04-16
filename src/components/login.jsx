import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './loginForm.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }
    navigate('/home');
  }

  return (<>


    <div className='wrapper'>
    <div className="login-background">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div> 
    </div>

      

      <form style={{ border: '2px solid rgba(0, 167, 195, 0.6)',
    boxShadow: '0 0 25px #00a7c3',
    borderRadius: '20px',
    padding: '30px 40px',
    backgroundColor: 'rgba(0, 0, 0, 0.85)'}}>
        <h1>Login</h1>
        <div className="input-box">
          <input 
            type='text' 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="input-box">
          <input 
            type='password' 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <div className='remember'>
        <button onClick={handleClick}>Login</button>
        </div>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
      
    </div>
    </>
  );
}

export default Login;