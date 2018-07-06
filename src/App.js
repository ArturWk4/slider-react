import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
         <SayFullName name="Artur" surname="Elkin" link="vk.com/workout_ka4er"/>
         <SayFullName name="Someone" surname="Any surname" link="vk.com/japancar_club"/>
         <SayFullName name="Bla" surname="Blabla" link="#"/>
      </div>
    );
  }
}

function Hello () { 
  return (
        <h1> Hello  </h1>
    )
}

function SayFullName(info) {
  return (
        <div>
          <h1>Мое имя: {info.name}</h1>
          <h1> Фамилия : {info.surname} </h1>
          <a href={info.link}>Мой профиль ВК</a>
        </div>
    )
}
const element = <SayFullName name="Artur" surname="Elkin" link="vk.com/workout_ka4er"/>;


function AllNames() {
  return (
      <div>
         <SayFullName name="Artur" surname="Elkin" link="vk.com/workout_ka4er"/>
         <SayFullName name="Someone" surname="Any surname" link="vk.com/japancar_club"/>
         <SayFullName name="Bla" surname="Blabla" link="#"/>
      </div>
    )
}

export default App;
