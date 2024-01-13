import React, {useState} from 'react';
import { UserService } from '../api/api';


function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
     
    const handleLogin = async(e) => {
      e.preventDefault();
      try {
        if(!username && !password){
          alert.error('This field is required')
        }else{
          const response = await UserService.login({username, password});
          console.log(response.data)
          const token = response.data.token;
          localStorage.setItem('token', token)
        }
      } catch (error) {
        console.error('Login failed!!!');
      }
     }
  return (
    <>
        <form
          className="form-group"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "400px",
            backgroundColor: "#8F8484",
            height: "400px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "250px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <input
              type="text"
              name="username"
              className="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ color: "#958E8E", borderStyle: "none", height: "30px" }}
            />
          </div>
          <div>
            <input
              type="Password"
              name="password"
              className="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: "#958E8E", borderStyle: "none", height: "30px",marginTop:"5px" }}
            />
          </div>
          <div>
            <button
            onClick={handleLogin}
            type='submit'
              style={{
                backgroundColor: "#E3CCBE",
                width: "100px",
                marginTop: "10px",
                height: "30px",
                borderRadius: "5px",
                borderStyle: "none",
                color: "#695246",
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <a href='../register'>Register</a>
            {/* <a href='../register'>
            <button
              style={{
                marginLeft: "5px",
                height: "30px",
                backgroundColor: "#E3CCBE",
                borderRadius: "5px",
                borderStyle: "none",
                color: "#695246",
              }}
            >
              Register
            </button>
            </a> */}
          </div>
        </form>
    </>
  );
}

export default Login
