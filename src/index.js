import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


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
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
