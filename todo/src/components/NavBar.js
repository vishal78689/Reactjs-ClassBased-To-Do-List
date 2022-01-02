import React, { Component } from 'react'

export class NavBar extends Component {
    render(props) {
        return (
            <div className='col-12'>
          <h2 className='bg-primary text-white text-center'>
            To Do List By {this.props.name}
          </h2>

          {/* <button className="btn btn-seconadry n-2"
          onClick={this.changeStateData}
          >Change</button> */}
        </div>
        )
    }
}


