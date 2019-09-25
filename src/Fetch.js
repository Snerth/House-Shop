import React, {Component} from 'react'

class Fetch extends Component {   
    state = {
        loading: true,
        houses: null,
    }
    async componentDidMount() {
        const url="https://mihailgorceag.free.beeceptor.com/house"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({houses: data.buildings.buildings})
    }

    render() {
        return (
            <div>
                <div>{this.state.houses}</div>
            </div>
        )
    }
}


export default Fetch