import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './Components/Pages/Home';
import StudentsData from './Components/Pages/StudentsData';
import ContactUs from './Components/Pages/ContactUs';
import ErrorPage from './Components/Pages/ErrorPage';
import EditStudent from './Components/Pages/EditStudent';
import NewStudent from './Components/Pages/NewStudent';
import { addStudent, updateStudent } from './Redux Components/CreateReducer';

function RoutersComponent() {
  const dispatch = useDispatch();

  const handleAddStudent = (newStudent) => {
    dispatch(addStudent(newStudent));
  };

  const handleUpdateStudent = (index, updatedStudent) => {
    dispatch(updateStudent({ index, updatedStudent }));
  };

  return (
    <div>
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Home/>} />

                <Route path="/students-data" 
                  element={<StudentsData handleAddStudent={handleAddStudent} />}
                />

                <Route path="/editstudent" 
                  element={<EditStudent handleUpdateStudent={handleUpdateStudent} />}
                />

                <Route path="/newstudent" element={<NewStudent />} />

                <Route path='/contact-us' element={<ContactUs/>} />
                
                <Route path='/*' element={<ErrorPage/>} />
            
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutersComponent