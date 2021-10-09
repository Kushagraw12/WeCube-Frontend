import React, { useState } from 'react';
import './t2.css';

function Task2() {
  const [user, setUser] = useState('');
  const [mess, setMess] = useState('');
  const [email, setEmail] = useState('');
  const [ck, setCk] = useState(true);

  return (
    <div>
      {ck ? (
        <div className="bgg">
          <div className="task2">
            <h1 className="contact-us">Contact Us</h1>
            <form>
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                type="text"
                placeholder="NAME"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-MAIL"
              />
              <input
                value={mess}
                onChange={(e) => setMess(e.target.value)}
                type="text"
                placeholder="MESSAGE"
              />
            </form>
            <button
              type="Submit"
              onClick={() => {
                setCk(false);
              }}
            >
              Send message
              <img
                src="https://img.icons8.com/material-rounded/24/000000/long-arrow-right.png"
                className="arrow"
              />
            </button>
          </div>
          <div className="sec2">
            {/* <span><call></span> */}
            <span>
              <img
                src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-call-valentines-day-flatarticons-blue-flatarticons.png"
                className="call"
              />
            </span>
            <span className="txt">26909384 </span>
            {/* <span><location></span> */}
            <span>
              <img
                src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-location-maps-and-locations-those-icons-lineal-color-those-icons-5.png"
                className="location"
              />
            </span>
            <span className="txt">Brivibas str. 13-46, Riga </span>
            {/* <span><email></span> */}
            <span>
              <img
                src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-interface-kiranshastry-lineal-color-kiranshastry-1.png"
                className="email"
              />
            </span>
            <span className="txt">info@kru.iv</span>
          </div>
        </div>
      ) : (
        <div className="task2">
          <h4> Name: {user} </h4>
          <h4> Email: {email} </h4>
          <h4> Message: {mess} </h4>
          <button
            type="Submit"
            onClick={() => {
              setCk(true);
            }}
          >
            Go Back to form!
          </button>
        </div>
      )}
    </div>
  );
}

export default Task2;
