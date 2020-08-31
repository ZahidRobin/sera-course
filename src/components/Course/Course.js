import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
const Course = (props) => {
    const course = props.course;
    const handleAddToCart = props.handleAddToCart;
    // const enrolledCourses = props.enrolledCourses;
    return (
        <div className="course">
            <Card style={{ width: '96%',marginBottom: '35px',height: '25rem' }}>
                <Card.Img variant="top" src={course.thumbnail} />
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                        <strong>Instructor : {course.instructor}</strong><br></br>
                        <strong>Price : ${course.price}</strong>
                    </Card.Text>
                </Card.Body>
                <Card.Footer><Button onClick={() => handleAddToCart(course)} variant="success"><FontAwesomeIcon icon={faPlus} />Add To cart</Button></Card.Footer>
                {/* <Card.Footer><Button variant="success">Already Enrolled</Button></Card.Footer> */}
            </Card>
        </div>
    );
};

export default Course;