import React from 'react';
import ModalComponent from './Modal';
import 'bootstrap/dist/css/bootstrap.css';
import htmlCssImg from './images/Htmlpic.jpeg';
import jsImg from './images/Javaimage.jpg';
import reactImg from './images/ReactImage.jpg';

const courseCards = [
  {
    title: "HTML & CSS Fundamentals",
    text: "Learn to structure web pages with HTML and style them beautifully using CSS. Build your first static website.",
    image: htmlCssImg,
    details: "This course covers semantic HTML, box model, positioning, flexbox, and CSS grid layout. You'll build responsive layouts and style interactive pages from scratch."
  },
  {
    title: "JavaScript Essentials",
    text: "Bring your pages to life with JavaScript. Learn variables, functions, DOM manipulation, and event handling.",
    image: jsImg,
    details: "In this course, you'll understand how JavaScript works in the browser. You'll build interactive forms, slideshows, and simple games while learning modern syntax (ES6+)."
  },
  {
    title: "React for Beginners",
    text: "Build modern user interfaces using components, props, and hooks in React. Perfect your frontend skills.",
    image: reactImg,
    details: "This course introduces JSX, state, useEffect, routing, and component architecture. You'll create dynamic SPAs and deploy them using tools like Vite or Create React App."
  }
];

const CardComponent = () => (
  <div className="container mt-4">
    <div className="row justify-content-center">
      {courseCards.map((course, index) => (
        <div className="col-md-4 d-flex justify-content-center mb-4" key={index}>
          <div className="card shadow-sm border-0" style={{ width: '18rem' }}>
            <img
              src={course.image}
              className="card-img-top"
              alt={course.title}
            />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.text}</p>
              <ModalComponent title={course.title} body={course.details} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CardComponent;
