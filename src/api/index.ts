import * as firebase from 'firebase/app';
import GroupsCollection from './Groups';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const projectId = 'bookmarks-f1731';
const apiKey = 'AIzaSyCMr0LC6HPo4nLm1hF_hCQhjT4-yoXGXq4';

const firebaseConfig = {
  apiKey,
  projectId,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  appId: '1:425181767271:web:def8d5091f635993'
};

firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();

export const groupsApi = new GroupsCollection(DB);

export default firebase;
