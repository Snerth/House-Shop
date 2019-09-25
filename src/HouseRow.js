import React, { PureComponent } from 'react'
import House from './House'

export default class HouseRow extends PureComponent {
    render() {
        return (
            <div className='row' > 
            {
                this.props.houses.map( (house) => {
                    return <House 
                        showingModal={this.props.showingModal} 
                        house={house}
                        selectHouse={this.props.selectHouse}
                    />
                })
            }
            
            </div>
        )
    
    }
}
