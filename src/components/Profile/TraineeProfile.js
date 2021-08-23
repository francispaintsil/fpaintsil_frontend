import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import Collapsible from "react-collapsible";
import Axios from "axios";
import { setTraineeDataAction } from "../../Actions/setTraineeDataAction";
import { useDispatch } from "react-redux";

export default function TraineeProfile(props) {
  const dispatch = useDispatch()
  const {trainee_id,
    trainee_firstname,
    trainee_lastname,
    trainee_email,
    trainee_skill,
    trainee_specialty,
    traineeback_detail,
  } = props.userData;
  let animage = "";
  const [fname, setFname] = useState(trainee_firstname)
  const [lname, setLname] = useState(trainee_lastname)
  const [email, setEmail] = useState(trainee_email)
  const [skill, setSkill] = useState(trainee_skill)
  const [speciality, setSpeciality] = useState(trainee_specialty)
  const [detail, setDetail] = useState(traineeback_detail)
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
    Axios.put(`http://localhost:5000/trainee/${trainee_id}`,{
      fname,
      lname,
      email,
      skill,
      speciality,
      detail
    }).then(res=>{
      if(res.data){
        console.log(res.data)
       props.showUser();      
      }
    }).catch(err=>{
      console.log(err)
    })
    // alert('update')
  }

  function handleDelete() {
    Axios.delete(`http://localhost:5000/trainee/delete/${trainee_id}`,{
     params:{
       uid: trainee_id
     }
    }).then(res=>{
        console.log(res.data)
        dispatch(setTraineeDataAction(res.data));
    }).catch(err=>{
        
    })
  }

  function submitForm(e){
    e.preventDefault();
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
        <form onSubmit={submitForm} action="" method="post">
          <div className="form-item">
            <label>Last name </label>
            <input
              type="text"
              value={lname} onChange={e=>{
                setLname(e.target.value)
             }} 
            />
          </div>

          <div className="form-item">
            <label>First name </label>
            <input
              type="text"
              value={fname} onChange={e=>{
                setFname(e.target.value)
             }} 
            />
          </div>

          <div className="form-item">
            <label>Email </label>
            <input type="text" value={email} onChange={e=>{
               setEmail(e.target.value)
            }} />
          </div>

          <div className="form-item">
            <label>Skill </label>
            <input type="text" value={skill} onChange={e=>{
               setSkill(e.target.value)
            }} />
          </div>

          <div className="form-item">
            <label>Speciality </label>
            <input type="text" value={speciality} onChange={e=>{
               setSpeciality(e.target.value)
            }} />
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
                {`${detail}`.substring(0, 300)}
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
