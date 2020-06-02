import firebase from 'firebase';

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    // Allows us to connect to our firebase

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCESS'})
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err})
    })
  }
}