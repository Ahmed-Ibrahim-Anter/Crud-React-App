import React, { Component, Fragment } from 'react';




class CourseList extends Component {
    state = {
        isEdit: false
    };

    submitbtn =(e)=>{
        e.preventDefault();
        this.props.handelEdit(this.props.index,this.input.value);
        this.switchState()
    }

    updateForm = () => {

        return <form onSubmit={this.submitbtn}>
            <input type='text' 
            ref={(v)=>{this.input=v}}
            defaultValue={this.props.details}/>
            <button className='update' type="submit" >update</button>
        </form>
    }


    switchState = () => {

        let { isEdit } = this.state;
        this.setState({ isEdit: !isEdit });
    }

    withoutEdit = () => {
        return  <li>
          <p>  {this.props.details}</p>
            <button className='Edit' type="submit" onClick={() => { this.switchState() }}>Edit</button>
            <button className='Delete' type="submit" onClick={() => { this.props.handelDelete(this.props.index) }}>Delete</button>

        </li>
    }
    render() {
        let { isEdit } = this.state;
        return (

            <Fragment>

                {isEdit ?  this.updateForm(): this.withoutEdit() }
            </Fragment>

        );
    }
}

export default CourseList;