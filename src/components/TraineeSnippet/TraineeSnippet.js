import React, { useState } from "react";
import logo from "../../logo.svg";
import {
  FaAdjust,
  FaArrowLeft,
  FaCogs,
  FaEnvelope,
  FaEye,
  FaPen,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import ReactModal from "react-modal";
import TraineeProfile from "../Profile/TraineeProfile";

export default function TraineeSnippet(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  function handleShowUser(e) {
    setIsOpen((prev) => !prev);
  }

  const {
    trainee_id,
    trainee_firstname,
    trainee_lastname,
    trainee_email,
    trainee_skill,
    trainee_specialty,
  } = props.userData;
  return (
    <div className="trainee-snippet">
      <span>{trainee_id}</span>
      <img src={logo} alt="user" />
      <div className="user-detail-content">
        <p>
          <FaUser /> {trainee_firstname} {trainee_lastname}
        </p>
        <div
          style={{ width: "90%", height: "2px", backgroundColor: "darkgrey" }}
        >
          {" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            flexDirection: "column",
            margin: "5px",
          }}
        >
          {" "}
          <FaEnvelope /> {trainee_email}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            flexDirection: "column",
            margin: "5px",
          }}
        >
          {" "}
          <FaCogs /> {trainee_skill}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            flexDirection: "column",
            margin: "5px",
          }}
        >
          {" "}
          <FaAdjust /> {trainee_specialty}
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleShowUser} className="btn-update">
          <FaEye />
        </button>
      </div>
      <ModeUser
        userData={props.userData}
        isOpen={isOpen}
        showUser={handleShowUser}
      />
    </div>
  );
}

function ModeUser(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "90%",
    },
    overlay: {
      backgroundcolor: "#2a2ade",
    },
  };
  return (
    <ReactModal
      isOpen={props.isOpen}
      style={customStyles}
      contentLabel="Look"
      closeTimeoutMS={200}
    >
      <button onClick={props.showUser }>
        <FaArrowLeft style={{ color: "slategray" }} />
      </button>
      <TraineeProfile userData={props.userData} />
    </ReactModal>
  );
}
