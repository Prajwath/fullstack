import React from "react";

class myform extends React.Component{
    constructor(props){
        super(props);


        this.state={
            name: '',
            mobile: '',
            gender: 'Male'
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})

       
    }

    submitHandler = (event) => {
       event.preventDefault();
        
        alert(`Form Submitted with ${JSON.stringify(this.state)}` );


        //Fetch API code below/showdata
        fetch(
            'http://localhost:7003/savedata', { method:'POST',
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(this.state)
        }).then(Response => Response.json())
        .then(data => {
            alert(data.response);
        })
    }


    render(){
        
        return(
            <form onSubmit={this.submitHandler}>
                <table>
                    <tr>
                        <td><label>Name:</label></td>
                        <td><input type="text" name="name" onChange={this.changeHandler}></input></td>
                       
                    </tr>

                    <tr>
                        <td><label>Mobile:</label></td>
                        <td><input type="text" name="mobile" onChange={this.changeHandler}></input></td>
                       
                    </tr>

                    <tr>
                        <td><label>Gender:</label></td>
                        <td>
                            <select name="gender" onChange={this.changeHandler}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                            </select></td>
                       
                    </tr>

                    <tr>
                       
                        <td><input type="submit" value="SAVE" /> </td>
                       
                    </tr>
                </table>
            </form>
        )
    }
}

export default myform