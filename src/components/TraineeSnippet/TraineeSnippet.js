import React from "react";
import logo from '../../logo.svg'
import {FaAdjust, FaCogs, FaEnvelope, FaPen, FaTrash, FaUser} from 'react-icons/fa'

export default function TraineeSnippet(props) {
const { trainee_id,
    trainee_firstname, 
    trainee_lastname, 
    trainee_email, 
    trainee_skill, 
    trainee_specialty, traineeexperience, traineeback_detail} = props.userData;
        return (
            <div className="trainee-snippet">
                <span>{trainee_id}</span>
                <img src = {logo} alt='user'/>
                <div className="user-detail-content">
                    <p><FaUser/> {trainee_firstname} {trainee_lastname}</p>
                    <div style={{width:'90%',height:"2px",backgroundColor:"darkgrey"}}> </div>
                     <div style={{display:"flex",
                                alignItems:'center',
                                justifyItems:'center',
                                flexDirection:'column',
                                margin:'5px'}}> <FaEnvelope/> {trainee_email}</div>

                     <div style={{display:"flex",
                                alignItems:'center',
                                justifyItems:'center',
                                flexDirection:'column',
                                margin:'5px'}}> <FaCogs/> {trainee_skill}</div>

                    <div style={{display:"flex",
                                alignItems:'center',
                                justifyItems:'center',
                                flexDirection:'column',
                                margin:'5px'}}> <FaAdjust/> {trainee_specialty}</div>
                    {/* <li>Name: {trainee_firstname} {trainee_lastname}</li>
                    <li>Email: {trainee_email}</li>
                    <li>Skill: {trainee_skill}</li>
                    <li>Specialty: {trainee_specialty}</li>
                    <li>Experience: {traineeexperience}</li> */}
                </div>
                <div className="button-container">
                    <button className="btn-update">
                        <FaPen/>                        
                    </button>
                    <button className="btn-delete">
                        <FaTrash/>
                    </button>
                </div>
            </div>
        );
}
