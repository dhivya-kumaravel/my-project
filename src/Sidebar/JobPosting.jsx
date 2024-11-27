import React from 'react'
import InputField from '../Components/InputField';

const JobPosting = ({handleChange}) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

// convert Date to string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
        <div>
        <h4 className='text-lg font-medium'>Date of Posting</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test3" id="test3" value="" onChange={handleChange}/>
                <span className='checkmark'></span>All Time
            </label>
            <InputField handleChange={handleChange} value={twentyFourHoursAgo} title="Last 24hrs" name="test3"/>
            <InputField handleChange={handleChange} value={sevenDaysAgoDate} title="Last week" name="test3"/>
            <InputField handleChange={handleChange} value={thirtyDaysAgoDate} title="Last month" name="test3"/>
            
        </div> </div>
  )
}

export default JobPosting