import React, { Component } from 'react'
import HouseRow from'../HouseRow'
import Modal from 'react-bootstrap/Modal'
import '../CSS/Reset.css'
import '../CSS/HouseList.css'
import '../CSS/Modal.css'

class ShopCart extends Component {
    constructor(props) {
      super(props)
      this.state = {
        showModal: false,
        selectedHouse: {
        img: "",
        name: "",
        price: 0,
        area: 0,
        rooms: 0,
        phone: "",
        adress: ""
        },
        Houses: []
      }
    }
    showModal = () => {
      this.setState({ showModal: true })
    }
    hideModal = () => {
      this.setState({ showModal: false })
    }
    selectHouse = (selectedHouse) => {    
      this.setState({selectedHouse}, () => {
        console.log(this.state.selectedHouse)
      })      
    }
    componentDidMount() {
      const data = JSON.parse(localStorage.getItem('buildings'))
      console.log(data)
      this.setState({Houses: data})
    }
    
    removeFromStorage = (id) => { 
      const filteredHouses = this.state.Houses.filter((house, i) => {
        return house.id !== id
      })
      this.setState({Houses: filteredHouses})
      localStorage.setItem('buildings', JSON.stringify([...filteredHouses]))
    }

    render() {
        return (
            <div>
                <div className="topContainer">  
                <div className="houseList container">            
                  {  
                    this.state.Houses.map((house, index, array) => {                    
                      if(index % 4 === 0) {
                        const first = array[index + 0]
                        const second = array[index + 1]
                        const third = array[index + 2]
                        const fourth = array[index + 3]
                        const houses = [first, second, third, fourth].filter((element) => {
                          return element !== undefined
                        })
                        return <HouseRow                          
                          key={index}
                          houses={houses} 
                          Houses={this.Houses}
                          addToStorage={this.addToStorage}
                          removeFromStorage={this.removeFromStorage}
                          showModal={this.showModal} 
                          selectHouse={this.selectHouse}
                        />        
                      }
                      return null          
                    })   
                  }       
                </div>   
              </div>

              <Modal className="Modal" style={{opacity:1}} show={this.state.showModal} onHide={this.hideModal} size="lg">
                <Modal.Header className="ModalH">
                  <img className="ModalImg" alt="House" src={this.state.selectedHouse.img} />
                </Modal.Header>
                <Modal.Body className="ModalB">
                  <ul>
                    <li className="ModalLi">{this.state.selectedHouse.name}</li>
                    <li className="ModalLi">Price: ${this.state.selectedHouse.price}</li>
                    <li className="ModalLi">Number of rooms: {this.state.selectedHouse.rooms}</li>
                    <li className="ModalLi">Area: {this.state.selectedHouse.area}</li>
                    <li className="ModalLi">Adress: {this.state.selectedHouse.adress}</li>
                    <li className="ModalLi">Call us: {this.state.selectedHouse.phone}</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer className="ModalF">
                  <button className="Modalbuttons" variant="secondary" onClick={this.hideModal}>
                    Close
                  </button>
                  <button className="Modalbuttons" variant="primary" onClick={() => {
                    this.hideModal()
                    console.log(this.state.selectedHouse.id)
                    this.removeFromStorage(this.state.selectedHouse.id)
                    }}>
                    Remove
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
        )
    }
}

export default ShopCart
