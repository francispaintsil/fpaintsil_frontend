import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import Collapsible from "react-collapsible";
import Axios from "axios";

export default function TraineeProfile(props) {
  const {
    trainee_firstname,
    trainee_lastname,
    trainee_email,
    trainee_skill,
    trainee_specialty,
    traineeback_detail,
  } = props.userData;
  let animage = "";
  const rnd = Math.floor(Math.random() * 4) + 1;
  switch (rnd) {
    case 1:
      animage =
        "https://cdn.pixabay.com/photo/2016/01/20/23/10/bowie-1152551_960_720.png";
      break;
    case 2:
      animage =
        "https://cdn.pixabay.com/photo/2016/03/15/23/22/elizabeth-taylor-hollywood-1259553_960_720.jpg";
      break;
    case 3:
      animage =
        'https://cdn.pixabay.com/photo/2012/04/04/22/11/martin-luther-king-25271_960_720.png"';
      break;
    default:
      animage =
        "https://media.istockphoto.com/photos/kwame-nkrumah-portrait-picture-id1026509330";
  }

  function handleUpdate() {
    Axios.put("http://localhost:5000/trainee/update",{

    }).then(res=>{

    }).catch(err=>{

    })
  }

  function handleDelete() {
    Axios.delete("http://localhost:5000/trainee/update",{
        
    }).then(res=>{

    }).catch(err=>{
        
    })
  }

  return (
    <div className="trainee-profile">
      <div className="trainee-profile-left">
        <div
          style={{
            borderRadius: "30px",
            width: "100%",
            height: "70%",
            backgroundColor: "",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={animage}
            alt="pickup"
          />
          <h2 style={{ width: "100%", textAlign: "center" }}>
            {trainee_firstname} {trainee_lastname}
          </h2>
        </div>
      </div>
      <div className="trainee-profile-right">
        <form action="" method="post">
          <div className="form-item">
            <label>Name </label>
            <input
              type="text"
              value={`${trainee_firstname} ${trainee_lastname}`}
            />
          </div>

          <div className="form-item">
            <label>Email </label>
            <input type="text" value={`${trainee_email}`} />
          </div>

          <div className="form-item">
            <label>Skill </label>
            <input type="text" value={`${trainee_skill}`} />
          </div>

          <div className="form-item">
            <label>Speciality </label>
            <input type="text" value={`${trainee_specialty}`} />
          </div>
          <div>
            <Collapsible
              trigger={
                <button className="collapse_trigger">View detail</button>
              }
            >
              <p
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {`${traineeback_detail}`.substring(0, 300)}
              </p>
            </Collapsible>
          </div>
          <div className="profile-button-container">
            <button onClick={handleUpdate}>
              <FaPen />
            </button>
            <button onClick={handleDelete}>
              <FaTrash />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
