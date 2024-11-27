import React from 'react'
import InputField from '../Components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium'>Work Experience</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>Any Experiance
            </label>
            <InputField handleChange={handleChange} value='six-months' title="Six-months" name="test"/>
            <InputField handleChange={handleChange} value= 'one-year' title="One-year" name="test"/>
            <InputField handleChange={handleChange} value='two-years' title="Two-years" name="test"/>
            
        </div>
    </div>
  )
}

export default WorkExperience