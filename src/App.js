import React from 'react';
import './style.css';
import ApiCall from './task1';
import Task2 from './task2';

export default function App() {
  return (
    <div>
      <h1>Webcube Frontend Interviews </h1>
      <h3>Task 1: </h3>
      <p>Fetch data from a public api.</p>
      <br />
      <ApiCall />
      {/* API url: https://covid19.mathdro.id/api/countries/INDIA */}
      {/* Render component here */}
      <h3>Task 2: </h3>
      <p>Create a simple login form and display its value after submission.</p>
      <br />
      <Task2 />
      {/* Render component here */}
      <h3>Task 3: </h3>
      <p>Style the form component similar to the following image: </p>
      <img
        src="https://i0.wp.com/smashfreakz.com/wp-content/uploads/2017/11/Contact-Form-UI-Design-32.jpg?resize=600%2C451"
        style={{ width: '100%' }}
      />
    </div>
  );
}
