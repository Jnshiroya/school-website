import React,{useState} from 'react'
import axios from 'axios'



const Addstaff = (props) => {
   
    const [staff, setstaff] = useState({ uname:"",email: "",class:"",joining_year:"",post:"", password: "" })
  const onchange = (e) => {
    setstaff({ ...staff, [e.target.name]: e.target.value })
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/staff/createstaff`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uname:staff.uname,email: staff.email,joining_year:staff.joining_year,class:staff.class,
        post:staff.post, password: staff.password })
    });
    const json = await response.json();
    if (json.success) {    
      //SEND EMAIL
      await axios.post("http://localhost:5000/api/mail/users",staff).then((res) => {
          console.log(res);
          props.showalert('success', 'Add Staff Successfully..');
        }).catch((err) => {
            console.log(err);
        });
      
      
      
      setstaff({ uname:"",email: "",class:"",joining_year:"",post:"", password: "" });

    } else {
      props.showalert('danger', 'Invalid Email Or Password Detail!');
    }
  }
  return (
    <>
    <div className='container my-3'>
      <h2>Register New Staff</h2>
      <form onSubmit={handlesubmit}>
      <div className="mb-3">
          <label htmlFor="uname" className="form-label">User Name</label>
          <input type="text" className="form-control" id="uname" value={staff.uname} name='uname' aria-describedby="emailHelp"  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" value={staff.email} name='email' aria-describedby="emailHelp"  onChange={onchange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="joining_year" className="form-label">joining_Year</label>
          <input type="year" className="form-control" id="joining_year" value={staff.joining_year} name='joining_year' aria-describedby="yearHelp"  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="class" className="form-label">Class</label>
          <input type="text" className="form-control" id="class" value={staff.class} name='class' aria-describedby="classlHelp"  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="post" className="form-label">Post</label>
          <input type="text" className="form-control" id="post" value={staff.post} name='post' aria-describedby="noHelp"  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" >Password</label>
          <input type="password" className="form-control" name='password' value={staff.password} id="password" onChange={onchange} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>

    </div>

</>
  );
}

export default Addstaff