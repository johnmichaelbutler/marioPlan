export const createProject = (project) => {
  // Returns a function for redux thunk
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    // Thunk returns a promise
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      // Then dispatch the action
      dispatch({
        type: 'CREATE_PROJECT',
        project
      });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
  }
};