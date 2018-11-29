import React, { Component } from 'react';
import fire from '../../config/fire';
 
class UserSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      course: "",
      location: "",
      interests: "",
      users:[]
    }
  }

  handleChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
 Submit =(e)=> {
    e.preventDefault();
    var ref=fire.database().ref('User'); 
    var newRef=ref.push();
    newRef.set({
    Name: this.state.name,            /* This sends the values for profile info to the database*/
    Age: this.state.age,
    Course: this.state.course,
    Location: this.state.location,
    Intrests: this.state.intrests 
});
/*need to make Functionality for user filling all the fields before submitting*/
      var that=this;
      ref.on("value",function(snapshot){
        var users=[];
        snapshot.forEach(function(data){
      var t={
      Name:data.val().Name,
      Age:data.val().Age,
      Course:data.val().Course,
      Location:data.val().Location,
      Intrests:data.val().Intrests
      }
     
      var name=t.Name;
      var age=t.Age;
      var course=t.Course;
      var location=t.Location;
      var intrests=t.Intrests;
      var r= document.getElementById("lol");
     
      var b=React.Children.toArray(name);    ///split into array
      var b2=React.Children.toArray(age);
      var b3=React.Children.toArray(course);
      var b4=React.Children.toArray(location);
      var b5=React.Children.toArray(intrests);
      console.log(b+" "+b2+" "+b3+" "+b4+" "+b5);
      var c=0;
      for(var i=0;i<b.length;i++){
        c++;
       var d= document.createTextNode(b[i]);
       r.appendChild(d);
        
      }
     // console.log(name,age,course,location,intrests);
/*
      var s=document.createTextNode("Name : "+name+' ');
      var s2=document.createTextNode("Age : "+age+' ');
      var s3=document.createTextNode("Course : "+course+' ');
      var s4=document.createTextNode("Location : "+location+' ');
      var s5=document.createTextNode("Intrests : "+intrests+' ');
     
      r.appendChild(s);
      r.appendChild(s2);
      r.appendChild(s3);
      r.appendChild(s4);
      
      r.appendChild(s5);
*/
      users.push(t);
     
      that.setState({users: t});
    /*  var tif=Object.keys(users).map(function(item){
        return<li value={item}>{users[item]}</li>
        
          });
*/
         
  });

});

/*Retrieve data from database to the webpage */
      /*  ref.on('value',getData,noData);
        function getData(data){
          var INFO = document.querySelectorAll('cool');
          for(var j=0;j<INFO.length; j++){
            INFO[j].classList.remove();
          }
        
        var user=data.val();
        var keys=Object.keys(user);

        for(var i = 0; i < keys.length;i++){
        var k = keys[i];
       
        var age=user[k].Age;
        var course= user[k].Course;
        var intrests=user[k].Intrests;
        var location=user[k].Location;
        var name=user[k].Name;
       /* 
        var g=JSON.stringify(age);
        var g2=JSON.stringify(course);
        var g3=JSON.stringify(intrests);
        var g4=JSON.stringify(location);
        var g5=JSON.stringify(name);
        

        var s=document.createTextNode("Name : "+name+' ');
        var s2=document.createTextNode("Age : "+age+' ');
        var s3=document.createTextNode("Course : "+course+' ');
        var s4=document.createTextNode("Location : "+location+' ');
        var s5=document.createTextNode("Intrests : "+intrests+' ');
        var r= document.getElementById("lol");
        r.appendChild(s);
        r.appendChild(s2);
        r.appendChild(s3);
        r.appendChild(s4);
        
        r.appendChild(s5);
        
        }
        }
        
         
        function noData(err){
          console.log(err);	
        }
        */
        document.getElementById("info").reset();//reset value after entered
        
    }

/*
 Loop=(data)=>{
  var user=data.val();
  var keys=Object.keys(user);
  this.setState({
    users: user
  });
      this.keys.map((users) => 
        <p>{console.log(users.name)}</p>
  
      );
}  
*/
/*
  Loop=()=> {
    var that=this;
    this.ref=new fire('https://console.firebase.google.com/project/roommatch-f2355/database/roommatch-f2355/data/User');
    this.ref.on("value",function(snapshot){
      var u=[];
      snapshot.forEach(function(data){
var t={
  Name:data.val().name
}
u.push(t);
that.setState({u: u});
console.log(data.val());
      });
    });
  }

*/
  
  render() {

    return (
     
      <div className="form-group col-md-6">
       
    <table className="table table-bordered table-responsive">
        <thead>
         <tr>
           <th>Name</th>
           <th>Age</th>
           <th>Course</th>
           <th>Intrests</th>
           <th>Location</th>
         </tr>
   
           <tr>
             <td className="table-success">{this.state.name}</td>
             <td>{this.state.age}</td>
             <td>{this.state.course}</td>
             <td>{this.state.location}</td>
             <td>{this.state.intrests}</td>
             
             </tr>
         </thead>
      </table>
   
         <form onSubmit={this.Submit} id="info" style={{marginLeft:200}}>
					<label htmlFor="inputName">Name</label>
						<input  className="form-control" onChange={this.handleChange} type="text" placeholder="Enter Name" name="name" id="name"/>
            {this.state.name ? <span style={{color: "green"}}>That's Good!</span> :<span style={{color: "red"}}>Please Enter Name</span>}
						<br></br>
                        
					<label htmlFor="inputAge">Age</label>
						<input className="form-control" onChange={this.handleChange} type="age" placeholder="Enter Age" name="age" id="age"/>
            {this.state.age ? <span style={{color: "green"}}>That's Good!</span> :<span style={{color: "red"}}>Please Enter Age</span>}
						<br></br>
                       
					<label htmlFor="inputCourse">Course</label>
						<input className="form-control" onChange={this.handleChange}  type="text" placeholder="Enter Course" name="course" id="course"/>
            {this.state.course ? <span style={{color: "green"}}>That's Good!</span> :<span style={{color: "red"}}>Please Enter Course</span>}
						<br></br>
                        
					<label htmlFor="inputLocation">Location</label>
						<input className="form-control" onChange={this.handleChange}  type="location" placeholder="Enter Location" name="location" id="location"/>
            {this.state.location ? <span style={{color: "green"}}>That's Good!</span> :<span style={{color: "red"}}>Please Enter Location</span>}
						<br></br>
                        
					<label htmlFor="inputIntrests">Intrests</label>
						<input className="form-control" onChange={this.handleChange}type="text" placeholder="Enter Intrests" name="intrests" id="intrests"/>
            {this.state.intrests ? <span style={{color: "green"}}>That's Good!</span> :<span style={{color: "red"}}>Please Enter Intrests</span>}
						<br></br>   
            
						<button className="btn btn-primary" style={{marginLeft:100}} type="submit" >Submit</button>
					</form>
         <ul id="lol">

         </ul>
      </div>

    )
  }
}
export default UserSection;
