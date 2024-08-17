### Clone this repositories
```
git clone https://github.com/omor777/EchoShopper-frontend
```
### Install dependencies
```
yarn install
```
### Go to the firebase/firebase.config.js and replace
```
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: <your_firebase_apiKey>,
  authDomain: <your_firebase_authDomain>,
  projectId: <your_firebase_projectId>,
  storageBucket: <your_firebase_storageBucket>,
  messagingSenderId: <your_firebase_messagingSenderId>,
  appId: <your_firebase_appId>,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
```
### Run project
```
yarn dev
```
