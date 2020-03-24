import React, { Component } from 'react';
import './App.css';


export default  class App extends Component{

  constructor(){
    super();
    this.state ={
      nom: null,
      pr: null,
      age: null,
      list: []
    };
    this.addToState = this.addToState.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  addToState({target}){
    this.setState({
      [target.name]: target.value
    });
  }

  clickHandler= () =>{
    const nomState = this.state.nom; 
    const prState = this.state.pr;
    const ageState = this.state.age;
    var myArray = this.state.list.concat({nom: nomState, pr: prState, age: ageState});
    this.setState({list: myArray});
    console.log( myArray[0].nom );
  }

  delete(){

  }

  render(){
    return (
      <div className="App">
        <h1>CRUD App React JS</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
            <table>
              <tbody>
                <tr>
                  <td><input type="text" name="nom" placeholder="nom" value={this.state.nom} onChange={this.addToState}></input></td> 
                  <td><input type="text" name="pr" placeholder="prénom" value={this.state.pr} onChange={this.addToState}></input></td>
                  <td><input type="number" name="age" placeholder="age" value={this.state.age} onChange={this.addToState}></input></td>
                </tr>
                <tr>
                  <button onClick={this.clickHandler}>ADD</button>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-large">
            <h2>Regestred users</h2>
            <div>
            <table>
              <thread>
                <tr>
                  <th>nom</th>
                  <th>prénom</th>
                  <th>age</th>
                </tr>
              </thread>
              <tbody>
                {this.state.list.map(item => (
                  <tr><td>{item.nom}</td><td>{item.pr}</td><td>{item.age}</td><td><button color="secondary" variant="contained" onClick= {this.delete}>delete</button></td></tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
