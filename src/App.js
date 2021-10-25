import React, { useState } from 'react';
import LoginForm from './components/LoginForm.js';
import ReactPlayer from 'react-player'


function App() {
  const adminUser = {
    email: "Okuu@it.com",
    password: "nomad2023"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
        console.log("Logged in");
        setUser({
          name:details.name,
          email:details.email,
        });
  } else{
        console.log("Details do not match!");
        setError("Маалыматтар дал келген жок!");
    }
  }
  
  
  const Logout = () => {
    setUser({name:"", email:"" });
  }
  
  return (
    <div className="App">
      {(user.email !="")?(
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <div className="player"> 
          <ReactPlayer with='100px' height='300px' controls url='https://youtu.be/OtJkXuqyjkk' />
          </div>
            <button onClick={Logout}>Logout</button>
        </div>
      ):(
      <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
