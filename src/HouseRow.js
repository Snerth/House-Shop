import React, { PureComponent } from 'react'
import House from './House'


export default class HouseRow extends PureComponent {
    render() {

        return (
            <div className='row' > 
            {
                this.props.houses.map((house, index) => {
                    return <House 
                        key={index}
                        showModal={this.props.showModal} 
                        selectHouse={this.props.selectHouse}
                        house={house}
                        Houses={this.props.Houses}
                        addToStorage={this.props.addToStorage}
                        removeFromStorage={this.props.removeFromStorage}
                    />
                })
            }
            
            </div>
        )
    
    }
}
