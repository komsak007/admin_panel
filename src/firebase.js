import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChcnjsW28m5pND7clCCdn7l_6Ju2MKNuU",
  authDomain: "netflix-e17d0.firebaseapp.com",
  projectId: "netflix-e17d0",
  storageBucket: "netflix-e17d0.appspot.com",
  messagingSenderId: "1067173992530",
  appId: "1:1067173992530:web:ff2082fff832ada5f1a78b",
  measurementId: "G-T1XBDYT8Q9",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;
