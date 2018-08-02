const INITIAL_STATE = { usersList: {users: [], error:null, isFetching: false},
							newUser:{user:"", error: null, isAdding: false},
							deleteUser:{
								showDeleteModal: false,
							  userToDelete: null,
							  isFetching: false,
							  error: null,
							  successMsg:null
							},
							editUser:{
									showEditModal: false,
								  UserToEdit: null,
								  isFetching: false,
								  error: null,
								  successMsg:null
								},
						    formuser:{
								showAddUser:false,
							}
						};


export const usersReducer =  (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_USER_REQUEST':
          return { ...currentState, usersList: {users:[...currentState.usersList.users], error:null,isFetching: true},newUser:{user:null, error:null, isAdding:true}};

    case 'CREATE_USER_SUCCESS':
      
          const nextState = { ...currentState, usersList:{users:[...currentState.usersList.users, action.user], isFetching:false},newUser:{user:action.user, error:null, isAdding:false}}
      return nextState;

	 case 'CREATE_USER_REQUEST_FAILED':
	       return { ...currentState, usersList:{users:[...currentState.usersList.users], error:"champ vide", isFetching:false}, newUser:{user:null, error:action.message, isAdding:false}}

  case 'FETCH_USER_REQUEST':
         return { ...currentState, usersList: {users:[], error: null, isFetching: true} };

   case 'FETCH_USER_SUCCESS':
          //return action.users;
           return { ...currentState, usersList: {users: action.users, error:null, isFetching: false} };
   case 'HIDE_USER_MESSAGE':
	         return { ...currentState, usersList: {users:[...currentState.usersList.users], error:null,isFetching: false},newUser:{user:null, error:null, isAdding:false}};

	 case 'SHOW_DELETE_MODAL':
	 			return{
	 				...currentState, usersList: {users:[...currentState.usersList.users], error:null, isFetching: false}, deleteUser: {showDeleteModal:true, userToDelete:action.userToDelete}
	 			}

	 case 'HIDE_DELETE_MODAL':
	 			return{
	 				...currentState, usersList: {users:[...currentState.usersList.users], error:null, isFetching: false}, deleteUser: {showDeleteModal:false, userToDelete:null}
	 			}

	 case 'CONFIRM_DELETE_USER_REQUEST':
	 			return{
	 				...currentState, usersList: {users:[...currentState.usersList.users], error:null, isFetching: false}, deleteUser: {showDeleteModal:true, userToDelete:action.userToDelete, isFetching:true,error:null,successMsg:null}
	 			}

	 case 'CONFIRM_DELETE_USER_REQUEST_FAILED':
	 			return{
	 				...currentState, usersList: {users:[...currentState.usersList.users], error:null, isFetching: false}, deleteUser: {showDeleteModal:true, userToDelete:currentState.userToDelete, isFetching:false, error:action.message}
	 			}

	 case 'CONFIRM_DELETE_USER_REQUEST_SUCCESS':
	      const filterdusers = currentState.usersList.users.filter(user => user._id !== action.deletedUserId);
	 			return{
	 				...currentState, usersList: {users:filterdusers, error:null, isFetching: false}, deleteUser: {showDeleteModal:true, userToDelete:null, isFetching:false, error:null,successMsg:action.message}
	 			}

	 case 'SHOW_EDIT_MODAL':
	      return {
					...currentState, usersList: {users:[...currentState.usersList.users], error:null, isFetching: false}, editUser:{showEditModal:true, userToEdit:action.userToEdit}
				}

		case 'HIDE_EDIT_MODAL':
				return {
					...currentState, usersList: {users:[...currentState.usersList.users], error:null, isFetching: false}, editUser:{showEditModal:false, userToEdit:null}
				}

		case 'EDIT_USER_REQUEST':
				return {
					...currentState, usersList: {users:[...currentState.usersList.users], error:null, isFetching: false}, editUser:{showEditModal:true, userToEdit:action.userToEdit, isFetching:true, error:null, successMsg:null}
				}

		case 'EDIT_USER_REQUEST_FAILED':
				return {
					...currentState, usersList: {users:[...currentState.usersList.users], error:null, isFetching: false}, editUser:{showEditModal:true, userToEdit:currentState.editUser.userToEdit, isFetching:false, error:action.message, successMsg:null}
				}

		case 'EDIT_USER_REQUEST_SUCCESS':
		    const updatedState = currentState.usersList.users.map((user) => {
					if(user._id === action.user._id){
						return {...user, ...action.user};
					}
					return user;
				});
				return {
					...currentState, usersList: {users:updatedState, error:null, isFetching: false}, editUser:{showEditModal:true, userToEdit:action.user, isFetching:false, error:null, successMsg:action.message}
				}

		case 'HANDLE_EDIT_USER_FORM_CHANGE':
		      return {
						...currentState, usersList: {users:[...currentState.usersList.users], error:null, isFetching: false}, editUser:{showEditModal:true, userToEdit:currentState.editUser.userToEdit, isFetching:false, error:null, successMsg:null}
					}

    default:
        return currentState;

  }
};



export const userReducer = (currentState = [], action) => {
  switch (action.type) {
    case 'FETCH_USER_BY_ID_SUCCESS':
      return action.user;
    default:
      return currentState;
  }
};
