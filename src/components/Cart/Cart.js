import React from 'react';
import './Cart.css';
import {BrowserRouter as Router,
    Switch,Route,Link} from "../../../node_modules/react-router-dom";
const Cart = (props) => {
    const courses = props.course;
    const totalPrice = courses.reduce((total,course) => total + course.price,0);
    const totalDuration = courses.reduce((totaldr,course) => totaldr + course.duration,0);
    return (
        <div className="courseCart">
            <h3 className="text-center">Order Summary</h3>
            <p><strong>Item : {courses.length}</strong></p>
            <p><strong>Price : ${(totalPrice).toFixed(2)}</strong></p>
            <p>Duration : {totalDuration} hours</p>
            {/* <button style={{marginTop:'50px'}} class="btn btn-success">
                <Link to={{pathname:"/EnrolledCourse",courses}}>Enrolled Course</Link></button> */}
        </div>
    );
};

export default Cart;