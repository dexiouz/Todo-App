import React, { Component } from 'react';
import Header from './Header';
class LocalStorage extends Component {
  render() {
    const person = {
      name: "john_doe",
      age: 13
    }

    // convert to JSON object
    const personToJSON = JSON.stringify(person)
    // save it
    localStorage.setItem('newPerson', personToJSON);

    // TO RETRIEVE ITEM
    const getPerson = localStorage.getItem('newPerson')
    //convert item to real object
    const personToParse = JSON.parse(getPerson)

    return (
      <div>
        <Header title="LocalStorage Example" />
        The stringified version is

        <div><strong>{localStorage.getItem('newPerson')}</strong></div>

        After getting from local storage we get

        <div><strong>{personToParse.name} is {personToParse.age} years old</strong></div>

      </div>
    )
  }
}
export default LocalStorage;