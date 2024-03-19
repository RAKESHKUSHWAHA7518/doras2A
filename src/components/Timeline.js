import React from 'react'

// import { useState } from 'react';

 
  

const Timeline = ({info}) => {

    const {timeline}= info.user
    // const [hoveredIndex, setHoveredIndex] = useState(null);
   const tt=timeline[4].icon.url;
 
  return (

    

  //   <div className="flex">
  //   <div className="">
  //     <h1 className="text-center py-10 font-bold text-4xl">Timeline of Experience</h1>
  //     {timeline
  //       .filter((timelineItem) => timelineItem.enabled) // Filter based on the "enabled" field
  //       .sort((a, b) => a.sequence - b.sequence) // Sort based on the "sequence" field
  //       .map((timelines, index) => (
  //         <React.Fragment key={index}>
  //           <div className="flex items-center">
              
  //             <div className="w-full md:w-auto px-10 mb-8 object-center">
  //             <h1 className="relative timeline-marker rounded-full bg-gray-300 h-8 w-8 md:mx-20 text-center hover:bg-gray-400">{timelines.sequence}</h1>
  //               <div className="h-full border-l-4 border-gray-400 ml-8 px-4 md:mx-20 transition duration-300 ease-in-out transform hover:bg-gray-100 p-4 m-4">
  //                 <div className="border border-gray-300 rounded-lg shadow-md p-4 flex flex-col gap-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:bg-gray-300">
  //                   <div className="flex items-center gap-4">
  //                     <div className="flex">
  //                       <div>
  //                         <img
  //                           className="h-10 w-full object-cover rounded-t-md"
  //                           src={
  //                             timelines.icon && timelines.icon.url
  //                               ? timelines.icon.url
  //                               : tt
  //                           }
  //                           alt={timelines.jobTitle}
  //                         />
  //                       </div>
  //                       <div className="flex flex-col">
  //                         <h3 className="text-lg text-start md:text-base font-semibold text-gray-900">
  //                           {timelines.jobTitle}
  //                         </h3>
  //                         <p className="text-sm md:text-xs font-medium text-gray-600 text-center">
  //                           {timelines.company_name} - {timelines.jobLocation}
  //                         </p>
  //                         <h6 className="text-xs md:text-xxs font-normal text-gray-500 text-center">
  //                           {new Date(timelines.startDate).getDate()} /{" "}
  //                           {new Date(timelines.startDate).getMonth()} /{" "}
  //                           {new Date(timelines.startDate).getFullYear()} -{" "}
  //                           {new Date(timelines.endDate).getDate()} /{" "}
  //                           {new Date(timelines.endDate).getMonth()} /{" "}
  //                           {new Date(timelines.endDate).getFullYear()}
  //                         </h6>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="text-sm md:text-xs font-normal text-gray-600">
  //                     <p>{timelines.summary}</p>
  //                     <br />
  //                     <ul className="list-disc pl-4">
  //                       {timelines.bulletPoints.map((point, index) => (
  //                         <li key={index}>{point.trim()}</li>
  //                       ))}
  //                     </ul>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </React.Fragment>
  //       ))}
  //   </div>
  // </div>
  

     




    <div className="flex ">
    <div className=''>
        <h1 className='text-center  py-10 font-bold text-4xl'>Timeline of Experience</h1>
        {timeline
            .filter(timelineItem => timelineItem.enabled) // Filter based on the "enabled" field
            .sort((a, b) => a.sequence - b.sequence) // Sort based on the "sequence" field
            .map((timelines, index) => (
                <React.Fragment key={index}>

   <div class="relative pl-8 sm:pl-32  py-6 group mx-10  md:mx-60">
        {/* <!-- Purple label --> */}
        
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 mx-10 px-3">
        
            <time class="sm:absolute py-4  mx-2 p-2 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-25 h-18 mb-6 sm:mb-0   bg-emerald-100 rounded-lg text-black transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-0.5" > {new Date(timelines.startDate).getDate()}/ {new Date(timelines.startDate).getMonth()}/{new Date(timelines.startDate).getFullYear()} -{new Date(timelines.endDate).getDate()}/ {new Date(timelines.endDate).getMonth()}/{new Date(timelines.endDate).getFullYear()}</time>
            <div className='border p-2 m-2 w-3/4 rounded-md  hover:bg-gray-300 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2   '>
            <img className="h-10 w-10 object-cover rounded-t-md" src={timelines.icon && timelines.icon.url ? timelines.icon.url : tt} alt={timelines.jobTitle} />
            <div className="flex flex-col ">
            <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">{timelines.jobTitle}</div>
           
        <h3 className="text-lg text-start md:text-base font-semibold text-gray-900">{timelines.company_name} - {timelines.jobLocation}</h3>
        <p className="text-sm md:text-xs font-medium text-gray-600 text-center"></p>
        
        <div className="text-sm md:text-xs font-normal text-gray-600">
      <p>{timelines.summary}</p>
      <br />
      <ul className="list-disc pl-4">
        {timelines.bulletPoints.map((point, index) => (
          <li key={index}>{point.trim()}</li>
        ))}
      </ul>

    </div>
        </div>
        </div>
        </div>
        {/* <!-- Content --> */}
        {/* <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div> */}
    </div>

                    
 
 
                        
                    
                    
                </React.Fragment>
            ))}
    </div>
</div> 
 
      











 

    
  )
                    }

export default Timeline;

 
 {/* <div className='w-full md:w-3/4 md:mx-auto     px-10 mb-8 object-center'>
<div className="timeline-marker rounded-full bg-gray-300 h-8 w-8 md:mx-auto text-center ">{timelines.sequence}</div>
 <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">  

 <div className="h-full border-l-4 hover:border-blue-400  border-gray-400 ml-10 px-4  md:mx-auto    hover:bg-black p-5 m-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-5  rounded-lg "> 
  
  <div className="border border-gray-300 rounded-lg shadow-md p-4 flex flex-col gap-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2  hover:bg-gray-300  ">
    <div className="flex items-center gap-4 ">
     <div className='flex '>
      <div> 
       
      <img className="h-10 w-full object-cover rounded-t-md" src={timelines.icon && timelines.icon.url ? timelines.icon.url : tt} alt={timelines.jobTitle} />

      </div>
      <div className="flex flex-col">
        <h3 className="text-lg text-start md:text-base font-semibold text-gray-900">{timelines.jobTitle}</h3>
        <p className="text-sm md:text-xs font-medium text-gray-600 text-center">{timelines.company_name} - {timelines.jobLocation}</p>
        <h6 className="text-xs md:text-xxs font-normal text-gray-500 text-center"> {new Date(timelines.startDate).getDate()}/ {new Date(timelines.startDate).getMonth()}/{new Date(timelines.startDate).getFullYear()} -{new Date(timelines.endDate).getDate()}/ {new Date(timelines.endDate).getMonth()}/{new Date(timelines.endDate).getFullYear()}</h6>
        </div>
        </div>

    </div>
    <div className="text-sm md:text-xs font-normal text-gray-600">
      <p>{timelines.summary}</p>
      <br />
      <ul className="list-disc pl-4">
        {timelines.bulletPoints.map((point, index) => (
          <li key={index}>{point.trim()}</li>
        ))}
      </ul>

    </div>
    </div>
     </div>
  </div>
   
        */}