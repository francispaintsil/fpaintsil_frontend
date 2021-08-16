import React, { Component } from 'react'


class AppTitle extends Component {    

    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }

    componentDidMount() {
        // console.log(this.props)
    }
}

export default AppTitle
