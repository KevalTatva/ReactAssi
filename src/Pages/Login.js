import React from 'react';
import '../App.css';
import { TextField, Button,Grid, Link } from "@material-ui/core";
import UserAPI from "../API/UserData"
var UserJson = UserAPI.all();

 export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Password: "",
      IsLogon: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
  }

  handleSubmit() {
    UserJson = UserAPI.all();
   var Isvalid = false;
   if(this.state.UserName === "" || this.state.Password === "")
   {
     alert("Please enter UserName and Password");
     return false;
   }
   UserJson.forEach(item => {
    if (
      item.UserName.toUpperCase() === this.state.UserName.toUpperCase() &&
      item.Password === this.state.Password
    ) {
      Isvalid = true;
      return;
    } 
   });
  debugger;
    if (Isvalid)
    {
      this.setState({
         UserName: this.state.UserName,
         Password: this.state.Password,
         IsLogon: true
        });
        window.location.pathname = "/UserList"
    } 
    else
    {
      this.setState({ UserName: "", Password: "" });
      alert("Invalid UserName or Password");
    } 
  }
  handleSigUp(){
    window.location.pathname = "/SignUp"
  }
  handleForgotPassword(){
    UserJson = UserAPI.all();
    var password = "";
    if(this.state.UserName === "")
    {
      alert("Please enter UserName");
      return false;
    }
    UserJson.forEach(item => {
     if (
       item.UserName.toUpperCase() === this.state.UserName.toUpperCase()
     ) {
        password = item.Password;
       return;
     } 
    });
 
     if (password == "")
     {
      alert("Invalid UserName");
     } 
     else
     {
       alert("Your Password is : "+ password);
     }
  }

  render() {
    return (
      <form className="LoginBox">
        <fieldset>
        <Grid>
        <TextField
          label="UserName"
          required id="standard-required"
          variant="standard"
          placeholder="User Name"
          value={this.state.UserName}
          onChange={event => this.setState({ UserName: event.target.value })}
          
        />
        </Grid>
        <Grid>
        <TextField
          label="Password"
          id="standard-password-input"
          type="password"
          value={this.state.Password}
          onChange={event => this.setState({ Password: event.target.value })}
        />
        </Grid>
        <Grid style={{ marginTop: '10px' }}>
        <Link
          variant="outlined" color="primary" style={{ textTransform: "none" }}
          onClick={this.handleForgotPassword}
        >
          Forgot password
        </Link>
        </Grid>
        <Grid container justify="center" style={{ marginTop: '10px' }}>
        <Button
          variant="outlined" color="primary" style={{ textTransform: "none" }}
          onClick={this.handleSubmit}
        >
          Login
        </Button>
        <Button 
          variant="outlined" color="primary" style={{ textTransform: "none" }}
          onClick={this.handleSigUp}
          style={{ marginLeft: '10px' }}
        >
          Sign Up
        </Button>
        </Grid>
        </ fieldset>
      </form>
    );
  }
}
