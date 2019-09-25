import React, { PureComponent } from 'react'

export default class House extends PureComponent {
    render() {

        return (
            <div key={this.props.house.id} className="col-lg-3 col-md-6 col-sm-6 col-12 houseItem">
                <div className="houseLink" onClick={() => {
                    this.props.showingModal()
                    this.props.selectHouse(this.props.house)
                  
                }}>
                    <img className="houseImage" alt="House" src={this.props.house.img}/>
                </div>
                <p className="houseName">{this.props.house.name}</p>
                <p className="housePrice">${this.props.house.price}</p> 
                <a className="buy link" href="Buy.js">BUY</a>
            </div>            
        )
    }
}
