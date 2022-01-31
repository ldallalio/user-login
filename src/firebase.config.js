// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';

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
export const db = getFirestore();
const analytics = getAnalytics();
