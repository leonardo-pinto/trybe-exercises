import React, { Component } from 'react'

export default class ProfessionalInfo extends Component {
  render() {
    const { handleChange } = this.props
    const { currentState: { curriculum, job, jobDescription } } = this.props
    return (
      <fieldset>
        <legend>Professional Information</legend>
        <div>Curriculum
          <textarea 
            type="text"
            maxLength="1000"
            name="curriculum"
            value={curriculum}
            onChange={handleChange}
            required
          />
        </div>

        <div>Job
          <textarea 
            type="text"
            maxLength="40"
            name="job"
            value={job}
            onChange={handleChange}
            required
          />
        </div>

        <div>Job description
          <textarea 
            type="text"
            maxLength="500"
            name="jobDescription"
            value={jobDescription}
            onChange={handleChange}
            required
          />
        </div>
    

      </fieldset>
    )
  }
}
