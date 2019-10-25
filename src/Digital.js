import React, { Component } from 'react'

class Digital extends Component {

    state = {
        date: new Date()
    }

    componentDidMount () {
        this.interval = setInterval (() => {
            this.tick()
        }, 1000)
    }

    componentWillMount () {
        clearInterval(this.interval)
    }

    tick() {
        this.setState({date: new Date()})
    }
    
    render () {
        return (
            <div className="content">
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Digital