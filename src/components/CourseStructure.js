import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
function CourseStructure(props) {
    console.log(props);
    const courseName = props.match.params.coursename;
    /* these are not in statde to change thehy are var hard coded */
        const courses = {
            reactjs: [
                {title: "react js title 1", vid:"6j-n7ETAsiE"},
                {title: "react js title 2", vid:"aEkLXjiUs9Y"},
                {title: "react js title 3", vid:"ISEJCcDZMCI"}
                
            ],
            nodejs: [
                {title: "node js title 1", vid:"omc9xWnGqMU"},
                {title: "node js title 2", vid:"-_5XoTP6nZU"},
                {title: "node js title 3", vid:"6j-n7ETAsiE"}
            ]
        } 
        /* const [vid, uid] = useState(courses.reactjs) */
        const [vid, uid] = useState(courses[courseName][0].vid) /* Alt Shift downArrow to copy line */
        const [title, utit] = useState(courses[courseName][0].title)
        const renderVideo = ()=>{
            return(
                <>
                <h1>{title}</h1>
                <div className="video-container">
                    <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
                </div>
                </>
            )
        }
  return (
    <div className="CourseStructure">
      <h1>Course Structure</h1>
        {/* <h2>Welcome to the course {props.match.params.coursename} </h2> */}
        <h2>{courseName}</h2>
        {renderVideo()}

        <div className="collection">

            {
                courses[courseName].map(item=>{
                    return  <Link to="#!" className="collection-item" onClick={()=>{
                        uid(item.vid)
                        utit(item.title)
                    }}>{item.title}</Link>
                })

            }
      </div>
    </div>
  );
}

export default CourseStructure;
