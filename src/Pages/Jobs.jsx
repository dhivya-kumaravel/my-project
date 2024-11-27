import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
    <div>
    <h3 className='text-center text-red-600 font-semibold'>{result.length} Jobs</h3>
    </div>
    <section>{result}</section>
    </>
    
  )
}

export default Jobs