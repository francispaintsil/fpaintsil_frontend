import React, { useState, useEffect } from "react";
import TraineeSnippet from "../TraineeSnippet/TraineeSnippet";
import { SideNav } from "./SideNav";
import { useSelector, useDispatch } from "react-redux";
import { setTraineeDataAction } from "../../Actions/setTraineeDataAction";
import { Popover } from "react-tiny-popover";

const axios = require("axios");

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const traineesData = useSelector((state) => state.traineesData);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  function handleShowUser(e) {
    setIsOpen((prev) => !prev);
  }
  function getUsers() {
    axios
      .get("http://localhost:5000/trainees", {
        data: "*",
      })
      .then((res) => {
        console.log(res);
        setUsers((prev) => [...prev, ...res.data]);
        dispatch(setTraineeDataAction(res.data));
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="main">
      <SideNav />
      <div className="trainee-snippets-container">
        {traineesData.map((userD) => {
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
  );
}
