import React, { Component } from 'react';
import CourseForm from './componants/CourseForm';
import CourseList from './componants/CourseList';

class App extends Component {

  state = {
    items: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Dart' }],
    name: ''
  };
  handelChange = (e) => {

    this.setState({ [e.target.id]: e.target.value });
  };
  handelAdd = (e) => {
    e.preventDefault();
    let name = this.state.name;
    let items = this.state.items;
    if (name === '') { alert("??"); } else {
      items.push({ name });
      this.setState({ items });
    }
    this.setState({ name: '' })
  };

  handelDelete = (index) => {
    console.log(index)
    let items = this.state.items;
    items.splice(index, 1);
    this.setState({ items });
  }
  handelEdit = (index,val) => {
    let {items} = this.state;
    let course = items[index];
    course["name"]=val;
    this.setState({items});
  }

  render() {
    const { items } = this.state;
    let length = items.length;
    const elements = length? items.map((ele, index) => {
      return <CourseList details={ele.name} key={index} index={index} handelDelete={this.handelDelete} handelEdit={this.handelEdit}/>
    }):<h1> No Data Here To Show</h1>;
    return (
      <div className='App'>

        <h1>Course List</h1>
        <CourseForm name={this.state.name} handelChange={this.handelChange} handelAdd={this.handelAdd} />
        <ul>
          {elements}
        </ul>
      </div>
    );
  }
}

export default App;