import React, { useState } from "react";
import Menu from './Menu';
import '../App.css';
import { TextField, Button,Grid } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import UserAPI from "../API/UserData"

const UserBlank = { UserName: "", Password: "", Name:"", DOB:"",Phone:"",Gender:""}
export default class MaintenUser extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      UsersDetail : this.getUserDetails(),
      UserIndex : parseInt(this.props.match.params.Id)
    }
    
      
    this.handleSubmit = this.handleSubmit.bind(this);
    this.OnInputChange = this.OnInputChange.bind(this);
  }
   getUserDetails(){
     var id = parseInt(this.props.match.params.Id)
     var userslist = UserAPI.all();
    if( id > -1)
      return userslist[id];
    else
      return UserBlank;
   }
   handleSubmit() {
    if(this.state.UsersDetail.UserName === ""){
      alert("UserName required");
      return;
    }
    if(this.state.UsersDetail.Password === "")
    {
      alert("Password required");
      return;
    }
    var IsExist = false;

    UserAPI.all().forEach((item,index) => {
      if(this.state.UserIndex > -1 && index === this.state.UserIndex)
         return;
      if (item.UserName.toUpperCase() === this.state.UsersDetail.UserName.toUpperCase()) {
        IsExist = true;
        return;
      } 
   });
   if(IsExist)
   {
    alert("UserName already used");
    return;
   }
   var userslist = UserAPI.all();
    if(this.state.UserIndex > -1)
    {
      userslist[this.state.UserIndex] = this.state.UsersDetail;
    }else{
      userslist.push(this.state.UsersDetail);
    }
    UserAPI.Update(userslist)
    this.handleCancel();

   };

  OnInputChange = (event) => {
      if(event.target.name === "Phone")
      {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
      }
      var current = this.state.UsersDetail;
      current[event.target.name] = event.target.value;
       event.persist();  
       this.setState({ UsersDetail : current });  
  }
   
  handleCancel = () =>{
    if(isNaN(this.state.UserIndex))
      window.location.pathname = "/Login"
    else
      window.location.pathname = "/UserList"
    
  }

    render(){
      var menus= "";
     // if(!isNaN(this.state.UserIndex))
        menus = <Menu />;
    return(
        <div>
          <Menu />
          <Grid container justify="center" style={{ marginTop: '10px' }}>
        <form  autoComplete="off" className="LoginBox">
        <fieldset>
        <Grid>
        <TextField
          className="textField"
          label="UserName"
          required id="standard-required"
          variant="standard"
          placeholder="User Name"
          autoComplete = "off"
          name="UserName"
          value={this.state.UsersDetail.UserName}
         onChange={(event) => this.OnInputChange(event)}
          
        />
        </Grid>
         <Grid>
        <TextField
          className="textField"
          label="Name"
          id="standard"
          variant="standard"
          autoComplete = "off"
          placeholder="Name"
          name="Name"
          value={this.state.UsersDetail.Name}
          onChange={(event) => this.OnInputChange(event)}
          
        />
        </Grid>
        <Grid>
        <TextField 
          className="textField"
          label="Phone"
          id="standard"
          variant="standard"
          placeholder="Phone"
          name="Phone"
          inputProps= {{ maxLength : "10"}}
          
          value={this.state.UsersDetail.Phone}
          onChange={(event) => this.OnInputChange(event)}
          
        />
        </Grid>
        <Grid>
        <TextField
          className="textField"
          label="Password"
          autoComplete = "off"
          id="standard-password-input"
          type="password"
          name="Password"
          value={this.state.UsersDetail.Password}
          onChange={(event) => this.OnInputChange(event)}
        
        /> 
        </Grid>
        <Grid style={{"text-align":"left","marginLeft":"21px"}}>
        <TextField
          className="textField"
          label="Date Of Birth"
          id="date"
          type="date"
          variant="standard"
          autoComplete = "off"
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue=""
          name="DOB"
          margin="normal"
          value={this.state.UsersDetail.DOB}
          onChange={(event) => this.OnInputChange(event)}
        />
        
        </Grid>
        <Grid style={{"text-align":"left","marginLeft":"21px"}}>
        <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="Gender" value={this.state.UsersDetail.Gender} onChange={(event) => this.OnInputChange(event)}>
          <FormControlLabel value="F" control={<Radio />} label="Female" />
          <FormControlLabel value="M" control={<Radio />} label="Male" />
          <FormControlLabel value="O" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
        </Grid>
        
        <Grid container justify="center" style={{ marginTop: '10px' }}>
        <Button
          variant="outlined" color="primary" style={{ textTransform: "none" }}
          onClick={this.handleSubmit}
        >
          Save
        </Button>
        <Button 
          variant="outlined" color="primary" style={{ textTransform: "none" }}
          onClick={this.handleCancel}
          style={{ marginLeft: '10px' }}
        >
          Cancel
        </Button>
        </Grid>
        </fieldset>
      </form>
      </Grid>
      </div>
    );
}
}