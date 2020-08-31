import React,{useState,useEffect} from 'react';
import './App.css';
import data from './fakeData/data.json';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';
function App() { 
  const [courses,setCourses] = useState([]);
  const [enrolledCourse,setEnrolledCourses] = useState([]);
  const handleAddToCart = (course) => setEnrolledCourses([...enrolledCourse,course]);
  useEffect(()=>{
    setCourses(data);
  },[]);
  return (
    <div className="main-section">
      <div className="App">
        {
          courses.map(course => <Course enrolledCourses={enrolledCourse} handleAddToCart={handleAddToCart} course={course}></Course>)
        }
      </div>
      <div className="cart">
        <Cart course={enrolledCourse}></Cart>
      </div>
    </div>
  );
}

export default App;





