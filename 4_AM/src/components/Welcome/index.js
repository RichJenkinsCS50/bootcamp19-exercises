import React, { Component } from 'react';

class HelloForm extends Component {
constructor() {
  super()
  this.state = {
    name: "",
    gender: "",
    pronoun: "",
    hometown: "",
    firstFav: "",
    secondFav: "",
    thirdFav: "",
    birthday: "",
    huid: "",
    concentration: "",
    }
  }
  
  updateName = (event) => {
    this.setState({name: event.target.value})
  }
  updateGender = (event) => {
    this.setState({gender: event.targetvalue})
  }
  updatePronoun = (event) => {
    this.setState({pronoun: event.target.value})
  }
  updateHometown = (event) => {
    this.setState({hometown: event.target.value})
  }
  updateFirtFav = (event) => {
    this.setState({firstFav: event.target.value})
  }
  updateSecondFav = (event) => {
    this.setState({secondFav: event.target.value})
  }
  updateThirdFav = (event) => {
    this.setState({thirdFav: event.target.value})
  }
  updateBirthday = (event) => {
    this.setState({birthday: event.target.value})
  }
  updateHuid = (event) => {
    this.setState({huid: event.target.value})
  }
  updateConcentration = (event) => {
    this.setState({concentration: event.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <label>
          Name:
        < input type="string" onChange={this.updateName}></input>
        </label>
        <label>
          Gender: 
        <input type="radio" onChange={this.updateGender}></input>
        </label>
        <label>
          Pronoun: 
          <input type="string" onChange={this.updatePronoun}></input> 
        </label>
      <label>
        Hometown:  
        <input type="string" onChange={this.updateHometown}></input> 
      </label>
      <label>
        Favorite Food 1: 
        <input type="string" onChange={this.updateFirtFav}></input> 
      </label>
      <label>
        Favorite Food 2: 
        <input type="string" onChange={this.updateSecondFav}></input> 
      </label>
      <label>
        Favorite Food 3: 
        <input type="string" onChange={this.updateThirdFav}></input> 
      </label>
      <label>
        Birthday: 
        <input type="date" onChange={this.updateBirthday}></input> 
      </label>
      <label>
        HUID: 
        <input type="number" onChange={this.updateHuid}></input> 
      </label>
      <label>
        (Potential) Concentration: 
        <input type="string" onChange={this.updateConcentration}></input> 
      </label>
      </React.Fragment>                    
    )
  }
}

export default HelloForm