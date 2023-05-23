import NavBar from '../NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

import '../CSS/studentsdata.css'

function StudentsData() {
  const students = useSelector((state) => state.students);
  const navigate = useNavigate();
  return (
    <div>
        <NavBar/>

        <div className="data-table">
          <header className="header">
            <span className="title">Students Details</span>
            <button onClick={() => navigate('/newstudent')} >Add New Student</button>
          </header>

          <div>
            <table border={1} cellPadding={10} cellSpacing={0} className='table-data'>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.course}</td>
                    <td>{student.batch}</td>
                    <td>
                      <Link to="/editstudent" state={{data: index}} >Edit</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default StudentsData