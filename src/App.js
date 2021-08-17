
import React, { Component } from 'react'
import './App.css';
const axios = require('axios')


class App extends Component {

  state = {
      users: [],
      isLoading: true,
      errors: null
    };

    // Now we're going to make a request for data using axios

    getUsers() {
      axios.get("http://localhost/trainees/:id").then(response => response.data.results.map(user => ({
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
    }
  
    componentDidMount() {
      this.getUsers();
    }
  
    render() {
      const { isLoading, users } = this.state;
      return (
        <React.Fragment>
          <h2>Amalitech Trainers Portfolio</h2>
          <div>
            {!isLoading ? (
              users.map(user => {
                const { id,firstname, lastname, email, skill, specialty, experience, background} = user;
                return (
                  <div key={id}>
                    <p>{firstname}</p>
                  
          <div>Name: {firstname} {lastname}</div>
          <div>Email: {email}</div>
          <div>Skill: {skill}</div>
          <div>Specialty: {specialty}</div>
          <div>Experience: {experience}</div>
          <div>Background: {background}</div>
        
                    <hr />
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </React.Fragment>
      );
    }
    
  }
 
export default App;
