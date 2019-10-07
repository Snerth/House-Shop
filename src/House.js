import React, { PureComponent } from 'react'

export default class House extends PureComponent {
    render() {    
        return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 houseItem">
                <div className="houseLink" onClick={() => {
                    this.props.selectHouse(this.props.house) 
                    this.props.showModal()                                     
                }}>
                    <img className="houseImage" alt="House" src={this.props.house.img}/>
                </div>
                <p className="houseName">{this.props.house.name}</p>
                <p className="housePrice">${this.props.house.price}</p> 
                

                {this.props.removeFromStorage ? 
                    <button className="buy link" onClick={() => {  
                        this.props.removeFromStorage(this.props.house.id)                
                    }}>REMOVE</button>
                    :
                    <button className="buy link" onClick={() => {
                        this.props.addToStorage(this.props.house)                    
                    }}>BUY</button>
                }                               
            </div>            
        )
    }
}
