import React from 'react'
import InputField from '../Components/InputField'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium'>Location</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>
            <InputField handleChange={handleChange} value="London" title="London" name="test"/>
            <InputField handleChange={handleChange} value="Seattle" title="Seattle" name="test"/>
            <InputField handleChange={handleChange} value="Madrid" title="Madrid" name="test"/>
            <InputField handleChange={handleChange} value="Boston" title="Boston" name="test"/>
        </div>
    </div>
  )
}

export default Location