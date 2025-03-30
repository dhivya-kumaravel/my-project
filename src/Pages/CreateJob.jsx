import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable'
const CreateJob = () => {
    const[selectedOption, setSelectedOption]=useState(null);
    const {
        register,
         handleSubmit,
         reset,
        formState: { errors }, }  = useForm()
        const onSubmit = (data) => {
            data.skills = selectedOption;
            // console.log(data);
            fetch("jobs.json", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }).then(res=>res.json()).then((result) => {
                console.log(result);
                if(result.acknowledged){
                    alert("Job Posted successfully!...");
                }
                reset()
            })
                };

        const options=[{value:"JavaScript", label:"JavaScript"},
            {value:"C++", label:"C++"},
            {value:"HTML", label:"HTML"},
            {value:"React", label:"React"},
            {value:"Node", label:"Node"},
            {value:"MongoDB", label:"MongoDB"},
            {value:"TailwindCSS", label:"TailwindCSS"},
            {value:".Net", label:".Net"},
        ]
        
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* form */}
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                {/* 1st row */}
               <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Title</label>
                <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")}
                className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Name</label>
                <input type="text" placeholder="Ex-Microsoft" {...register("companyName")}
                className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>

               </div>

               {/* 2nd row */}

               <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Minimum Salary</label>
                <input type="text" placeholder='$20k' {...register("minPrice")}
                className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Maximum Salary</label>
                <input type="text" placeholder="$120k" {...register("maxPrice")}
                className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>

                

               </div>

               {/* 3rd row */}

               <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Salary Type</label>
                <select {...register("salaryType")} className='create-job-input'>
                    <option value="">Choose Salary</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option> </select>
                </div>
                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Location</label>
                <input type="text" placeholder="Ex:Newyork" {...register("jobLocation")}
                className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>     </div>

                {/*4th row  */}

                <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>

                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Posting Date</label>
                <input type="date" placeholder="Ex:2024-11-19" {...register("postingDate")}
                className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
                 placeholder:text-gray-400 focus:outline--none sm:text-sm sm:leading-6'/>
                </div> 

                <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Select Experience Level</label>
                <select {...register("experienceLevel")} className='create-job-input'>
                    <option value="">Choose Experience</option>
                    <option value="No Experience">No Experience</option>
                    <option value="6-Months">6-Months</option>
                    <option value="1-Year">1-Year</option>
                    <option value="2-Year">2-Year</option> </select>
                </div>
                    </div>

                    {/* 5th row */}
                    <div>
                    <label className='block mb-2 text-lg'>Choose Required Skills:</label>
                    <CreatableSelect 
                    defaultValue={selectedOption} 
                    onChange={setSelectedOption} 
                    options={options} isMulti className='create-job-input'/>
                    </div>

                    {/* 6th row */}

                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>

<div className='lg:w-1/2 w-full'>
<label className='block mb-2 text-lg'>Company Logo</label>
<input type="url" placeholder="Paste Your Company Logo URL:https://weshare.com/img1" {...register("companyLogo")}
className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900
 placeholder:text-gray-400 focus:outline--none sm:text-sm sm:leading-6'/>
</div>

<div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Employment Type</label>
                <select {...register("employmentType")} className='create-job-input'>
                    <option value="">Choose type</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Work-Remotely">Work-Remotely</option> </select>
                </div>
 </div>

                 {/* 7TH ROW */}
                <div className='w-full'>
                   <label className='block mb-2 text-lg'>Job Description</label>
                    <textarea className='w-full pl-3 py-1.5 focus:outline-none
                     placeholder:text-gray-700'
                     rows={6} 
                     placeholder='Describe About Job'
                     {...register("description")}/>
                </div>

                {/* last row */}

                <div className='w-full'>
                <label className='block mb-2 text-lg'>Job Posted By</label>
                <input type="email" placeholder="Your Email" {...register("postedBy")} className='create-job-input'/>
                </div>
                
                <input type="submit" className='block  mt-12 bg-blue-600 text-white font-semibold px-8
                py-2 rounded-sm cursor-pointer'/>
            </form>
        </div>
    </div>
  )
}

export default CreateJob