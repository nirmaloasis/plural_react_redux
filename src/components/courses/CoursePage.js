import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../actions/courseAction'

class CoursePage extends React.Component{
    constructor(props,context){
      super(props,context);
      this.state = {
          course:{title:""}
      }
      this.titleChange = this.titleChange.bind(this);
      this.onClickSave = this.onClickSave.bind(this);
    }
    titleChange(event){
        const {course} = this.state
        course.title = event.target.value;
        this.setState(course);
    }
    onClickSave(){
      
        this.props.actions.createCourse(this.state.course)
    }
    render(){
        return(
            <div>
                <h1>Course Page</h1>
                {this.props.courses.map((course,i) => <div key={i} >{course.title} </div>)}
                <h2>Add Course</h2>
                <input
                  type="text"
                  onChange = {this.titleChange}
                  value={this.state.course.title} />
                  <input
                  type="submit"
                  onClick = {this.onClickSave}
                  value="save" />  
             </div>   
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage)
