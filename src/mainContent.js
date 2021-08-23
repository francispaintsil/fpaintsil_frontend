import React, { useState, useEffect } from "react";
import TraineeSnippet from "./components/TraineeSnippet/TraineeSnippet";


const axios = require("axios");

export const MainContent = () =>  {
    const [users, setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

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

      return(
          <div className="trainee-snippets-container">
            
          {users.map((userD) => (
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
        ))}
          
        </div>
      )
}

