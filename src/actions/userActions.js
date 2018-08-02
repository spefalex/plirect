import Axios from 'axios';
import $ from "jquery"
//API URL
const apiUrl = 'http://127.0.0.1:8082/api/';

export const hideUserMessage = () => {
  return {
    type:'HIDE_USER_MESSAGE'
  }
}

export const fetchUsersRequest = () => {
  return {
    type:'FETCH_USER_REQUEST'
  }
}


//Sync action
export const fetchUserSuccess = (users) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    users: users,
    receivedAt: Date.now
  }
};

//Async action
export const fetchUsers = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchUsersRequest());
    // Returns a promise
    return Axios.get(apiUrl + 'read')
                .then(response => {
                  // dispatch another action
                  // to consume data
                  console.log(response)
                  dispatch(fetchUserSuccess(response.data))
                })
                .then(error => {
                  throw(error);
                })
  }
}


// Sync action
export const createUserSuccess = (user) => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}

export const createUserRequest = () => {
  return {
    type:'CREATE_USER_REQUEST'
  }
}

export const createUserFailed = (message) => {
  return {
    type:'CREATE_USER_REQUEST_FAILED',
    message
  }
  
}

export const createUser= (user) => {
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  
  //Return action
  return (dispatch) => {
       dispatch(createUserRequest());
   /* return Axios.post(apiUrl + 'bears',user,axiosConfig)
                .then(response => {
                  
                  if(response.data){
                  // dispatch a synchronus action
                  // to handle data
                 alert(response.data.message)
                  dispatch(createUserSuccess(response));
                  console.log(response)
                }
                else{
                  dispatch(createUserFailed(response.data));
                }
                })
                .then(error => {
                  console.log(error);
                }) 
                */

                 $.ajax({
                type: 'POST',
                url: apiUrl+'/bears',
                data: user,
                success: function (response) {

                  alert(response.message)
                 console.log(dispatch(createUserSuccess(response)));
               
                 
                },
                error: function (jqXHR, textStatus, errorThrown) {
                   dispatch(createUserFailed(textStatus.data));
                }
            });
  }
};



//Sync action
export const fetchUserByIdSuccess = (user) => {
  return {
    type: 'FETCH_USER_BY_ID_SUCCESS',
    user
  }
}

//Async action
export const fetchUserById = (userId) => {
  //Return action
  return (dispatch) => {
    return Axios.get(apiUrl + 'user/' + userId)
                .then(response => {
                  //Handle data with sync action
                  dispatch(fetchUserByIdSuccess(response.data.user[0]))
                })
                .catch(error => {
                  throw(error);
                })
  }
};


//sync action to show Delete user model
export const showDeleteModal = (userToDelete) => {
  return{
    type: 'SHOW_DELETE_MODAL',
    userToDelete
  }
}

export const hideDeleteModal = () => {
  return{
    type: 'HIDE_DELETE_MODAL'
  }
}

export const confirmDeleteUserRequest = (userToDelete) => {
  return{
    type: 'CONFIRM_DELETE_USER_REQUEST',
    userToDelete
  }
}

export const confirmDeleteUserRequestSuccess = (message, deletedUserId) => {
  return{
    type: 'CONFIRM_DELETE_USER_REQUEST_SUCCESS',
    message:message,
    deletedUserId:deletedUserId
  }
}

export const confirmDeleteUserRequestFailed = (message) => {
  return{
    type: 'CONFIRM_DELETE_USER_REQUEST_FAILED',
    message
  }
}

export const confirmDeleteUser = (userToDelete) => {
    return (dispatch) => {
      dispatch(confirmDeleteUserRequest(userToDelete));
      return Axios.delete(apiUrl + 'user/' + userToDelete._id)
                  .then(response => {console.log(response);
                    if(response.data.success){
                      //dispatch another action to consume data
                       dispatch(confirmDeleteUserRequestSuccess(response.data.message,userToDelete._id));
                    }
                    else{
                      //dispatch another action to consume data
                       dispatch(confirmDeleteUserRequestFailed(response.data.message));
                    }
                  })
                  .catch(error => {
                     dispatch(confirmDeleteUserRequestFailed(error));
                  })
    }
}

export const showEditModal = (userToEdit) => {
  return{
    type: 'SHOW_EDIT_MODAL',
    userToEdit
  }
}

export const hideEditModal = () => {
  return{
    type: 'HIDE_EDIT_MODAL'
  }
}

export const editUserRequest = (userToEdit) => {
  return{
    type: 'EDIT_USER_REQUEST',
    userToEdit
  }
}

export const editUserRequestSuccess = (user,message) => {
  return{
    type: 'EDIT_USER_REQUEST_SUCCESS',
    user:user,
    message:message
  }
}

export const editUserRequestFailed = (message) => {
  return{
    type:'EDIT_USER_REQUEST_FAILED',
    message
  }
}

export const editUser = (userToEdit) => {
  return (dispatch) => {
    dispatch(editUserRequest(userToEdit));
    return Axios.put(apiUrl +'user', userToEdit)
                .then(response => {
                  if(response.data.success){
                    dispatch(editUserRequestSuccess(response.data.user,response.data.message));
                  }
                  else{
                    dispatch(editUserRequestFailed(response.data.message));
                  }
                })
               .catch(err => {
                  dispatch(editUserRequestFailed(err));console.log(err);
               })
  }
}

export const handleEditUserFormChange = () => {
  return{
    type:'HANDLE_EDIT_USER_FORM_CHANGE'
  }
}
