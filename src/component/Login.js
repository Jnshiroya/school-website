import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [user, setuser] = useState({ email: "",type:"", password: "" })
  const navigate = useNavigate();
  const onchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }
  const handleradioclick=(e)=>{
   setuser({email:user.email ,type: e.target.value,password:user.password })
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/${user.type}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user.email, password: user.password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      localStorage.setItem('user-type', user.type);
      setuser({ email: "", password: "" })
      navigate('/');

      props.showalert('success', 'Login SuccessFully..');
    } else {
      props.showalert('danger', 'Invalid Email Or Password Detail!');
    }
  }
  return (
    <div className='container my-3'>
      <h2>Login</h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={user.email} name='email' aria-describedby="emailHelp"  onChange={onchange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <label className="form-label mb-2">User Type</label>
        <br />
        <div className="btn-group mb-3" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="usertype" onClick={handleradioclick} value="admin" id="admin" autoComplete="off"/>
          <label className="btn btn-outline-secondary" htmlFor="admin" >ADMIN</label>

          <input type="radio" className="btn-check" name="usertype" onClick={handleradioclick} value="staff" id="staff" autoComplete="off" />
          <label className="btn btn-outline-secondary" htmlFor="staff" >STAFF</label>

          <input type="radio" className="btn-check" name="usertype" value="student" onClick={handleradioclick} id="student" autoComplete="off" />
          <label className="btn btn-outline-secondary" htmlFor="student" >STUDENT</label>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" >Password</label>
          <input type="password" className="form-control" name='password' value={user.password ||""} id="password" onChange={onchange} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>

    </div>
  )
}

export default Login