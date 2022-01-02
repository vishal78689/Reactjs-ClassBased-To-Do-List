import React, { Component } from 'react'
import { NavBar } from './components/NavBar';

export default class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     username:"Vishal",
     todoItems:[
       { action:'do Cp',done:false},
       {action:'go to gym',done:false},
       {action:'yoga',done:true}
     ],
     newTodo:"",
  };
}
// changeStateData=()=>{
//   this.setState({
//     username:'Shreyan'
//   })
// }
toggleDone=(todo)=>
this.setState({
  todoItems:this.state.todoItems.map((item)=>
  item.action===todo.action?{...item,done:!item.done}:item),
});
updateValue=(event)=>{
  this.setState({
    newTodo:event.target.value
  });
}
newTodo=()=>{
  this.setState({
    todoItems:[
      ...this.state.todoItems,
      {
        action:this.state.newTodo,done:false
      },
    ],
    newTodo:""
  });
  
}
todoRows=()=>this.state.todoItems.map((item)=>(
<tr key={item.action}>
<td>{item.action}</td>
<td>
  <input type='checkbox'
  checked={item.done}
  onChange={()=>this.toggleDone(item)} />
</td>
</tr>
));

  render() {
    return (
      <div className='container'>
      <div className='row'>
       <NavBar name={this.state.username}/>
        <div className='col-12'>
          <input className='form-control' value={this.state.newTodo}
            onChange={this.updateValue}
          />
          <button className='btn btn-primary' onClick={this.newTodo}>
            Add
          </button>
        </div>
        <div className='col-12'>
          <table className='="table'>
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
        
      </div>
    )
  }
}

