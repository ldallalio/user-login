// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyC4WII-lPcY1r9BbsJIXpVvCBEYSEPXtFg',

	authDomain: 'userloginapp-7b324.firebaseapp.com',

	projectId: 'userloginapp-7b324',

	storageBucket: 'userloginapp-7b324.appspot.com',

	messagingSenderId: '318872149831',

	appId: '1:318872149831:web:17c16b4aca2f343cdc3662',

	measurementId: 'G-T3CLS1LFWJ',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
