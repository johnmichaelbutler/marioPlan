export const createProject = (project) => {
  // Returns a function for redux thunk
  return (dispatch, getState) => {
    // Make async call to database
    // Then dispatch the action
    dispatch({
      type: 'CREATE_PROJECT',
      project
    });
  }
};