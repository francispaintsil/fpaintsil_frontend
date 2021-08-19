
import React, { Component } from 'react'
import './App.css';
import TraineeSnippet from './components/TraineeSnippet/TraineeSnippet';
//import { fetchTrainee } from '../src/index';
const axios = require('axios')



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      isLoading: true,
      errors: null
    };
  }
    // Now we're going to make a request for data using axios

    getUsers() {    
      axios.get("http://localhost:5000/trainees",{ 
        data : '*'
      }).then(res=>{ 
        console.log(res)
        this.setState({
          users : [...this.state.users,...res.data]
        })
        // console.log([...this.state.users,res])
        console.log(' ==>|<== ', this.state.users)
      }).catch(error => console.log(error));
    }
      
    componentDidMount() {
      this.getUsers();
    }
  
    render() {
      return (
        <React.Fragment>
          <h2>Amalitech Trainers Portfolio</h2>
          <div className="trainee-snippets-container">
            {
              this.state.users.map(userD => {                
                return <TraineeSnippet userData = {userD}/>;
              })
            }
          </div>

            

          {/* <div>
            {!this.state.isLoading ? (
              this.state.users.map(user => {
                const { trainee_id,trainee_firstname, trainee_lastname, trainee_email, trainee_skill, trainee_specialty, traineeexperience, traineeback_detail} = user;
                return (
                    <div key={trainee_id}>
                        <div>Name: {trainee_firstname} {trainee_lastname}</div>
                        <div>Email: {trainee_email}</div>
                        <div>Skill: {trainee_skill}</div>
                        <div>Specialty: {trainee_specialty}</div>
                        <div>Experience: {traineeexperience}</div>
                        <div>Background: {traineeback_detail}</div>                    
                        <hr />
                    </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div> */}
        </React.Fragment>
      );
    }
    
  }
 
export default App;








/*
  .then(response => response.data.results.map(user => ({
            id:`${user.tranee_id}`,
            firstname: `${user.trainee_firstname}`,
            lastname: `${user.trainee_lastname}`,
            email: `${user.trainee_email}`,
            skill: `${user.trainee_skill}`,
            specialty: `${user.trainee_specialty}`,
            experience: `${user.traineeexperience}`,
            background: `${user.traineeback_detail}`
          }))
        ).then(users => {
          this.setState({
            users,
            isLoading: false
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
*/