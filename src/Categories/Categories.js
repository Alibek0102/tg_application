import React from 'react';
import './Categories.css';

const courses = [
    {
        id: 1,
        title: 'React for Beginners',
        author: 'John Doe',
        image: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg', // Пример изображения
    },
    {
        id: 2,
        title: 'Advanced JavaScript',
        author: 'Jane Smith',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58TIBqANB1PTufYIQTmZJBVAj4oN1KLVJFjM-0IOWVYMof6KNE6zhRjrUgHnH5CaWnwo&usqp=CAU', // Пример изображения
    },
    {
        id: 3,
        title: 'CSS Mastery',
        author: 'Michael Brown',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJPdqU6WU_-XeKJjHP5wNUj2yJNpKYwpqRHhU9nr632ZynMJAUq2U3b6bxKtCvE1LUA&usqp=CAU', // Пример изображения
    },
];

const Categories = () => {
    return (
        <div className="scroll-container">
            <div className="course-list">
                {courses.map((course) => (
                    <div key={course.id} className="course-item">
                        <img src={course.image} alt={course.title} className="course-image"/>
                        <div className="course-details">
                            <h2 className="course-title">{course.title}</h2>
                            <p className="course-author">{course.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;