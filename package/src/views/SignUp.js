import React, { useState } from 'react';
import './Login.css'; // Import CSS for transition

function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showSignupForm, setShowSignupForm] = useState(true); // State to control visibility

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8000/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
        
      });
console.log(JSON.stringify({ username, password, email }));
      const data = await response.json();
      if (response.ok) {
        // Signup successful, obtain JWT token and store it in localStorage
        localStorage.setItem('token', data.token);
        // Redirect or update UI based on successful signup
        console.log('Signup successful!');
        console.log('token: ' + data.token);
        console.log('admin: ' + data.admin);
        setShowSignupForm(false); // Hide the signup form on successful signup
      } else {
        // Handle signup error
        setError(data.error || 'Nepavyko registruotis');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      setError('Registracija nepavyko');
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className={`login-container ${showSignupForm ? 'visible' : 'hidden'}`}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: `url(${process.env.PUBLIC_URL}/yoyoback2.png)`, // Replace with your image URL
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            padding: '50px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            background: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registracija</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Prisijungimo vardas"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ margin: '10px', padding: '8px', borderRadius: '4px', width: '200px' }}
            />
            <input
              type="email"
              placeholder="El. paštas"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ margin: '10px', padding: '8px', borderRadius: '4px', width: '200px' }}
            />
            <input
              type="password"
              placeholder="Slaptažodis"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ margin: '10px', padding: '8px', borderRadius: '4px', width: '200px' }}
            />
            <button onClick={handleSignup} style={{ margin: '10px', padding: '8px 16px', borderRadius: '4px', background: '#F17F1D', color: '#fff', border: 'none', cursor: 'pointer' }}>Registruotis</button>
            {error && (
              <div style={{ margin: '10px', padding: '10px', borderRadius: '4px', background: 'rgba(255, 0, 0, 0.1)', border: '1px solid #FF0000', color: '#FF0000', textAlign: 'center' }}>
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
