import firebase from 'firebase';


export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    // Allows us to connect to our firebase

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err})
    })
  }
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    firebase.auth().signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS'})
      });
  }
};

export const signUp = (newUser) => {
  const { firstName, lastName, email, password} = newUser;

  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName,
          lastName,
          initials: firstName[0] + lastName[0]
        })
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS'});
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err})
      })
  };
};