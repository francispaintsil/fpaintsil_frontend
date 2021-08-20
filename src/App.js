import React, { useState, useEffect } from "react";
import "./App.css";
import TraineeSnippet from "./components/TraineeSnippet/TraineeSnippet";
import logo from "./logo.svg";
import ReactModal from "react-modal";
import TraineeProfile from "./components/Profile/TraineeProfile";
import { FaArrowLeft } from "react-icons/fa";
//import { fetchTrainee } from '../src/index';
const axios = require("axios");

function App() {
  const [users, setUsers] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [errors, seterrors] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Now we're going to make a request for data using axios

  function getUsers() {
    axios
      .get("http://localhost:5000/trainees", {
        data: "*",
      })
      .then((res) => {
        console.log(res);
        setUsers((prev) => [...prev, ...res.data]);
        // console.log(" ==>|<== ", this.state.users);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getUsers();
  }, []);

  function handleShowUser(e) {
    setIsOpen((prev) => !prev);
  }

  return (
    <React.Fragment>
      <div className="main">
        <SideNav />
        <div className="left-container">
          {/* <div className="banner"></div> */}
          <div className="trainee-snippets-container">
            {users.map((userD) => {
              return (
                <TraineeSnippet
                  key={userD.trainee_id}
                  isOpen={isOpen}
                  showUser={handleShowUser}
                  userData={userD}
                />
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
}

function SideNav(props) {
  return (
    <div className="side-nav">
      <p
        style={{
          color: "orangered",
          width: "100%",
          textAlign: "center",
        }}
      >
        Trainees Dashboard
      </p>
      <img src={logo} alt="img" />
      <h3
        style={{
          color: "orangered",
          width: "100%",
          textAlign: "center",
        }}
      >
        AMALITECH STUDENT PORTFOLIO{" "}
      </h3>
    </div>
  );
}



export default App;
