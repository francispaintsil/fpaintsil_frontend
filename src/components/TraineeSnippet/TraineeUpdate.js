import React, { Component } from "react";
import { Route, Switch, Link } from "react-router";
import TraineeSnippet from "./TraineeSnippet";

class TraineeUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
          users: []
        };
      }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/trainees" className="navbar-brand">
            Portfolio
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/trainees"} className="nav-link">
                Trainees
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/trainees"]} component={TraineeSnippet} />
            <Route exact path="/add" component={TraineeSnippet} />
            <Route path="/trainees/:trainees_id" component={TraineeSnippet} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default TraineeUpdate;