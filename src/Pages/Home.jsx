
import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card';
import Jobs from './Jobs';
import Sidebar from '../Sidebar/Sidebar';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    const[selectedCategory, setSelectedCatagory] = useState(null);
    const[jobs, setJobs] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[currentPage,setCurrentPage]=useState(1);
    const itemsPerPage = 6;
    useEffect(() => {
      setIsLoading(true);
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => {setJobs(data); 
          setIsLoading(false);});
    }, [])
    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  const handleChange = (event) => {
    setSelectedCatagory(event.target.value);
  }
       
  const handleClick = (event) => {
    setSelectedCatagory(event.target.value);
  }
    //calculate the index range
    const calculatePageRange = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return {startIndex, endIndex};
    };

    //function for the next page
    const nextPage = () => {
      if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
        setCurrentPage(currentPage + 1);
      }
    };

    //fn for prvs page

    const prevPage = () => {
      if(currentPage > 1){
        setCurrentPage(currentPage - 1);
      }
    };

//   main function

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // Filtering Input Items
    if (query) {
      filteredJobs = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, 
        employmentType, salaryType, postingDate, experienceLevel}) =>
        
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice)<=parseInt(selected) ||
        postingDate >= selected.toLowerCase() ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() );
        
    }

    // slice the data based on current page
    const {startIndex, endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };
     const result  = filteredData(jobs, selectedCategory, query);
  return (
    <div className=''>
        <Banner query={query} handleInputChange={handleInputChange} />

        {/* main content */}

        <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

          {/* lft */}
            <div className='bg-white p-4 rounded'>
              <Sidebar handleChange={handleChange} handleClick={handleClick}/>
              </div>

            {/* cart */}
            <div className='col-span-2 bg-white p-4 rounded-sm'>
              {
                isLoading ? (<p className='text-center'>Loading...</p>) : result.length > 0 ? 
                (<Jobs result={result}/>) : <><h3 className='text-lg text-center font-semibold'>{result.length} Jobs</h3> 
                <p className='text-center text-red-600 font-bold text-lg'> No result!</p></>
              }
              {/* pagination */}

              {
                result.length > 0 ? (
                  <div className='flex justify-center mt-4 space-x-8'>
                    <button onClick={prevPage} className='hover:underline'>Previous</button>
                    <span className='mx-2'>Page{currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length /
                     itemsPerPage)}
                     className='hover:underline'>Next</button>
                  </div>
                ) : ""
              }
              
              </div>

            {/* ryt */}
            <div className='bg-white p-4 rounded'><NewsLetter/></div>
            
        </div>
        </div>
  )
}

export default Home