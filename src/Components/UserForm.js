import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
//import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import * as userActions from "../actions/userActions";
import { createUserSuccess } from "../actions/userActions";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // alert( this.props.newUser.user)
  }
  componentDidUpdate() {
    this.props.newUser.user = null;
  }

  submitBook(e) {
    e.preventDefault();
  }

  myfynction() {
    const form = document.getElementById("myForm");
    if (form.title.value === "") {
      this.props.createUserFailed("Fill all fields");
      console.log(this.props.createUserFailed("Fill all fields"));
      return;
    } else {

  
      let data = {
        name : form.name.value
      }
     
      this.props.createUser(data);
 //     alert(this.props.newUser.isAdding)
    }
  }
testmessage() {
  if(this.props.newUser.isAdding==true)
  return(<p> ok</p>)
}
  render() {
    //return jsx

    return (
      <form className="form form-horizontal" id="myForm">
        <div className="row">
          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Title: </ControlLabel>
              <FormControl type="text" placeholder="Enter title" name="name" />
            </FormGroup>
          </div>
        </div>

        <FormGroup>
          <Button
            type="submit"
            bsStyle="success"
            bsSize="large"
            block
            onClick={() => this.myfynction()}
          >
            Submit
          </Button>

          {this.testmessage()}
        </FormGroup>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    newUser: state.users.newUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: users => dispatch(userActions.createUser(users)),
    createUserFailed: message => dispatch(userActions.createUserFailed(message)),
    createUserSuccess: users => dispatch(userActions.createUserSuccess(users))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
