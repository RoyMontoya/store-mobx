import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyALhmV1O7I2U7UYCtAKpwLNfdxoTJHs_-s",
	authDomain: "admin-21d2a.firebaseapp.com",
	databaseURL: "https://admin-21d2a.firebaseio.com",
	projectId: "admin-21d2a",
	storageBucket: "admin-21d2a.appspot.com",
	messagingSenderId: "66519554701"
};

firebase.initializeApp(config);

const database = firebase.database();

const dishes = database.ref('/dishes');
const drinks = database.ref('/drinks');

const data = {dishes, drinks};

export default data;
