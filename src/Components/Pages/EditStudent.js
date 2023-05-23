import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateStudent } from '../../Redux Components/CreateReducer';

const EditStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const data = useLocation();
  const dataid = data.state.data;
  const students = useSelector((state)=>state.students)

  const stdName=students[dataid].name;
  const stdAge=students[dataid].age;
  const stdCourse=students[dataid].course;
  const stdBatch=students[dataid].batch;

  const [name, setName] = useState(stdName);
  const [age, setAge] = useState(stdAge);
  const [course, setCourse] = useState(stdCourse);
  const [batch, setBatch] = useState(stdBatch);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (name && age && course && batch) {
      const newStudent = { name, age, course, batch };
      dispatch(updateStudent(newStudent));
      navigate('/students-data');
    }else {
      alert("Please Fill the All Fields..!")
    }
  }

  return (
    <div>
      <h1>Edit Student</h1>
      <form className="Form-Container">
        <br /> <br />
        <label> Name :
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label> Age : 
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label> <br /><br />
        <label> Course :
          <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        </label>
        <label> Batch :
          <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)} />
        </label><br /><br />
        <div className="Submit-Data-Buttons">
            <Link to="/students-data" className="link">
              <button>Cancel</button>
            </Link>
            <button className="Submit-Button" onClick={handleSubmit}>
              Update
            </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;