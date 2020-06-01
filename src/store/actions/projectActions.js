export const createProject = (project) => {
  // Returns a function for redux thunk
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    const firestore = getFirestore();
    // Thunk returns a promise
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'John',
      authorLastName: 'Butler',
      authorId: 123,
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