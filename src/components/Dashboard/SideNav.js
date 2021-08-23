import React,{useState,useEffect} from 'react';
import logo from '../../logo.svg';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTraineeDataAction } from '../../Actions/setTraineeDataAction';

export function SideNav() {
  const dispatch = useDispatch()
  const [srchValu, setSrchValu] = useState('');
  useEffect(() => {
    
  }, [srchValu])

  function search (e) {
    e.preventDefault();
    Axios.post('http://localhost:5000/trainees/search',{
      value : srchValu
    }).then(res=>{
      console.log(res.data);
      dispatch(setTraineeDataAction(res.data))
    })
  }

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
          AMALITECH STUDENT PORTFOLIO
        </h3>
        <form onSubmit={search}> 
          <input value={srchValu} style={{
            width: "95%",
            height:'30px'
          }} onChange={e=>setSrchValu(e.target.value)} type='text'/>
          <input style={{
            width: "100%",
            height:'25px'
          }} type = 'submit' value='Search'/>
        </form>
      </div>
    );
  }
