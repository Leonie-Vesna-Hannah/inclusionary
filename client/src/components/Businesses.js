import React, { Component } from 'react'
import axios from 'axios';
import ProjectList from './ProjectList';

export default class Projects extends Component {

  state = {
    projects: []
  }
  getData = () => {
    // get the current list of projects from the server
    axios.get('/api/projects')
      .then(response => {
        console.log(response);
        // put them into the state
        this.setState({
          projects: response.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className='projects-container'>
        <ProjectList projects={this.state.projects} />
      </div>
    )
  }
}