import React from 'react'
import Modal from 'react-bootstrap/Modal'
import HouseRow from'../HouseRow'
import sortArray from '../utils/sortArray'
import '../CSS/Reset.css'
import '../CSS/HouseList.css'
import '../CSS/Modal.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.sortingMethods = {
      sortByPriceAsc(a, b) {
        return a.price - b.price
      },
      sortByPriceDes(a, b) {
        return b.price - a.price
      },
      sortByName(a, b) {
        return a.name.localeCompare(b.name)
      }
    } 

    this.state = {
      value: '', 
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
      searchType: 'sortByName',
      houses: [],
      
    }
  }

  async componentDidMount() {
    const url = "http://www.mocky.io/v2/5d89e9cc3000004600b9a50a"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({houses: data.buildings})
  }

  showModal = () => {
    this.setState({ showModal: true })
  }
  hideModal = () => {
    this.setState({ showModal: false })
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  selectHouse = (selectedHouse) => {    
    this.setState({selectedHouse}, () => {
      console.log(this.state.selectedHouse)
    })      
  }
  selectSearchType = (event) => {
    this.setState({searchType: event.target.value}, () => {
    })     
  }
  addToStorage = (house) => {
    const shopCart = JSON.parse(localStorage.getItem('buildings')) || []
    localStorage.setItem('buildings', JSON.stringify([...shopCart, {...house, id: +Date.now()}]))
  }
  

  render() { 
    const unSorted = this.state.houses.filter((house) => { 
      return house.name.toLowerCase().includes(this.state.value.toLowerCase())
    })

    const sortedArray = sortArray(unSorted, this.sortingMethods[this.state.searchType])

    return (      
      <div>     
        <div className="head">              
          <input 
            name="query"
            className="search"
            type="text"
            value={this.state.value} 
            onChange={this.handleChange} 
            placeholder="search..."
          />
          <select onChange={this.selectSearchType} className="searchType">
            <option className="searchTypeOption" value="sortByName">by name</option>
            <option className="searchTypeOption" value="sortByPriceDes">by price (descending)</option>
            <option className="searchTypeOption" value="sortByPriceAsc">by price (ascending)</option>
          </select>
        </div>
        
        <div className="topContainer">  
          <div className="houseList container">            
            {  
              sortedArray.map((house, index, array) => {                    
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
                    showModal={this.showModal} 
                    selectHouse={this.selectHouse}
                    addToStorage={this.addToStorage}
                    removeFromStorage={this.removeFromStorage}
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
              this.addToStorage(this.state.selectedHouse)
              this.hideModal()}}>
              Buy
            </button>
          </Modal.Footer>
        </Modal>
        
      </div>

    )
  }
}
  
  