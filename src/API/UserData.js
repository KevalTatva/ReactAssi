var UserAPI = {
    Users: [
        { UserName: "John", Password: "Doe", Name:"John Doe", DOB:"1994-09-28",Phone:"7567541184",Gender:"M" },
        { UserName: "Annas", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annad", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annaf", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annag", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annah", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annat", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annae", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Anna3", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annan", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annab", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annac", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annaq", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Annaw", Password: "Smith", Name:"John Doe", DOB:"1994-09-28",Phone:"1234567890",Gender:"M" },
        { UserName: "Peter", Password: "Jones", Name:"John Doe", DOB:"1994-09-28",Phone:"0123456789",Gender:"M" },
        { UserName: "admin", Password: "admin", Name:"John Doe", DOB:"1994-09-28",Phone:"9856547455",Gender:"M" }
    ],
    all: function() { 
        if(localStorage.getItem('UserList') === null)
        {
            localStorage.setItem('UserList', JSON.stringify(this.Users));
        }else{
            this.Users = JSON.parse(localStorage.getItem('UserList'));
        }
        return this.Users
    },
    get: function(id) {
      const isPlayer = (p,index) => index === id
      return this.players.find(isPlayer)
    },
    Update : function(list){
        localStorage.setItem('UserList', JSON.stringify(list));
    }

  }
  
  export default UserAPI