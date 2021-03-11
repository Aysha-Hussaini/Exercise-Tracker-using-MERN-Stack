import React, { Component } from "react"; 

class CreateExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            description : '',
            duration : 0,
            date : new Date(),
            users : []
        }
    }
  render() {
    return (
     <div>
       <p>You are here to create exercise</p>
     </div>
    );
    }
}

export default CreateExercise;