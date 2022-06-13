import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const AddStudent = (props) => {
    const navigate=useNavigate()
    const [student, setstudent] = useState({ uname:"",email: "",class:"",addmission_year:"",rollno:"", password: "" })
  const onchange = (e) => {
    setstudent({ ...student, [e.target.name]: e.target.value })
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/student/createstudent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uname:student.uname,email: student.email,addmission_year:student.addmission_year,class:student.class,
        rollno:student.rollno, password: student.password })
    });
    const json = await response.json();
    if (json.success) {    
      setstudent({ uname:"",email: "",class:"",addmission_year:"",rollno:"", password: "" });
      navigate('/addstudent');
      props.showalert('success', 'Add Student Successfully..');

    } else {
      props.showalert('danger', 'Invalid Email Or Password Detail!');
    }
  }
  return (
    <>
    <div className='container my-3'>
      <h2>Register New Student</h2>
      <form onSubmit={handlesubmit}>
      <div className="mb-3">
          <label htmlFor="uname" className="form-label">User Name</label>
          <input type="text" className="form-control" id="uname" value={student.uname} name='uname' aria-describedby="emailHelp"  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" value={student.email} name='email' aria-describedby="emailHelp"  onChange={onchange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="addmission_year" className="form-label">Addmission Year</label>
          <input type="year" className="form-control" id="addmission_year" value={student.addmission_year} name='addmission_year' aria-describedby="yearHelp"  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="class" className="form-label">Allotment Class</label>
          <input type="text" className="form-control" id="class" value={student.class} name='class' aria-describedby="classlHelp"  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="addmission_year" className="form-label">Roll No</label>
          <input type="number" className="form-control" id="rollno" value={student.rollno} name='rollno' aria-describedby="noHelp"  onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" >Password</label>
          <input type="password" className="form-control" name='password' value={student.password} id="password" onChange={onchange} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>

    </div>

</>
  );
}

export default AddStudent