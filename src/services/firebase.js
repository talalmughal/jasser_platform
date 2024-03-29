import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-BbT_KyQKSac1k7Awb9xqvkY3IyNdqTc",
  authDomain: "jasser-e977f.firebaseapp.com",
  projectId: "jasser-e977f",
  storageBucket: "jasser-e977f.appspot.com",
  messagingSenderId: "559505305076",
  appId: "1:559505305076:web:eadbd93f90d37275281da1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
export const auth = getAuth();

//  Initialize firebase-storage
export const storage = getStorage(app);

// for user to sign up
export async function signup(email, password) {
  try {
    const ret = await createUserWithEmailAndPassword(auth, email, password);
    return ret;
  } catch (error) {
    console.log("Something went wrong in firebase/signup funtion: ", error);
    return error;
  }
}

// for fetching user document's reference
export async function getUserDocRef(email, userType) {
  try {
    const userCollectionRef = collection(db, userType);
    const querySnapshot = query(userCollectionRef, where("email", "==", email));
    const response = await getDocs(querySnapshot);
    let userDocRef;
    response.forEach((doc) => {
      userDocRef = doc.id;
    });
    return userDocRef;
  } catch (error) {
    console.log(
      "Something went wrong in firebase/getUserDocRef function: ",
      error
    );
  }
}

// for user to log in
export async function login(email, password, userType) {
  try {
    const creds = await signInWithEmailAndPassword(auth, email, password);
    await auth.setPersistence(browserLocalPersistence);
    const userDocRef = await getUserDocRef(creds?.user?.email, userType);
    return userDocRef;
  } catch (error) {
    console.log("Something went wrong in firebase/login funtion: ", error);
    return error;
  }
}

// to create an applicant
export async function createApplicant(userData, applicantDocRef) {
  try {
    await setDoc(doc(db, "applicant", applicantDocRef), userData);
  } catch (error) {
    console.log(
      "Something went wrong in firebase/createApplicant funtion: ",
      error
    );
  }
}

// to create an employer
export async function createEmployer(userData, employerDocRef) {
  try {
    await setDoc(doc(db, "employer", employerDocRef), userData);
  } catch (error) {
    console.log(
      "Something went wrong in firebase/createEmployer funtion: ",
      error
    );
  }
}

// to create a job
export async function createJob(jobData, jobDocRef) {
  try {
    await setDoc(doc(db, "job", jobDocRef), jobData);
  } catch (error) {
    console.log("Something went wrong in firebase/createJob funtion: ", error);
  }
}

// to create an application
export async function createApplication(applicationDocRef, applicationData) {
  try {
    await setDoc(doc(db, "application", applicationDocRef), applicationData);
  } catch (error) {
    console.log(
      "Something went wrong in firebase/createApplication funtion: ",
      error
    );
  }
}

// to upload profile-picture to firebase storage
export async function uploadProfilePicture(profilePicture, storageFolder) {
  try {
    const imageRef = ref(storage, `${storageFolder}/ProfilePicture`);
    return uploadBytes(imageRef, profilePicture);
  } catch (error) {
    console.log(
      "Something went wrong in firebase/uploadProfilePicture function: ",
      error
    );
  }
}

// to upload resume to firebase storage
export async function uploadResume(resume, storageFolder) {
  try {
    const resumeRef = ref(storage, `${storageFolder}/Resume`);
    return uploadBytes(resumeRef, resume);
  } catch (error) {
    console.log(
      "Something went wrong in firebase/uploadResume function: ",
      error
    );
  }
}

// to get all jobs
export async function getAllJobs() {
  try {
    const jobCollectionRef = collection(db, "job");
    const response = await getDocs(jobCollectionRef);
    let jobs = response.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));
    return jobs;
  } catch (error) {
    console.log("Something went wrong in firebase/getJobs funtion: ", error);
  }
}

// to get all employers
export async function getAllEmployers() {
  try {
    const employerCollectionRef = collection(db, "employer");
    const response = await getDocs(employerCollectionRef);
    let employers = response.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));
    return employers;
  } catch (error) {
    console.log(
      "Something went wrong in firebase/getAllEmployers funtion: ",
      error
    );
  }
}

// to get all applicants
export async function getAllApplicants() {
  try {
    const applicantCollectionRef = collection(db, "applicant");
    const response = await getDocs(applicantCollectionRef);
    let applicants = response.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));
    return applicants;
  } catch (error) {
    console.log(
      "Something went wrong in firebase/getAllApplicants funtion: ",
      error
    );
  }
}

// to get a user's profile picture
export async function getProfilePicture(storageReference) {
  const res = await getDownloadURL(
    ref(storage, `${storageReference}/ProfilePicture`)
  );
  return {
    id: storageReference,
    picture: res,
  };
}

// to get a user's resume Link
export async function getResumeLink(storageReference) {
  try {
    const res = await getDownloadURL(
      ref(storage, `${storageReference}/Resume`)
    );
    return {
      id: storageReference,
      resume: res,
    };
  } catch (error) {
    if (error.code === "storage/object-not-found") {
    } else {
      console.log(
        "Something went wrong in firebase/getResumeLink function: ",
        error
      );
    }
  }
}
