import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
    state = {
        title : '',
        content : ''
    }

    SubmitHandler = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state);
    }

    TextChangeHandler = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {
        return (
            <div className="container col s4">
                <form onSubmit={this.SubmitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label> 
                        <textarea id="title" className="materialize-textarea" onChange={this.TextChangeHandler} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project content</label> 
                        <input type="text" id="content" onChange={this.TextChangeHandler} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject : (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)