import React, { Component } from 'react'
import AppTitle from '../components/AppTitle'

class Home extends Component {
    state = {
        posts: []
    }
    render() {
        
        return (
            <div>
                <AppTitle {...this.props} title="Welcome To Amalitech Trainees Portfolio" />
                <div className="grid-container">
                    <div className="grid-item">Child One</div>
                    <div className="grid-item2">Child Two</div>
                    <div className="grid-item3">Child Three</div>
                </div>
                
            </div>
        )
    }

    
}

export default Home
