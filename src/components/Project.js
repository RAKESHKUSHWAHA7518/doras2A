  import React from 'react'

  import { useState } from 'react';
  import ProjectCard from './ProjectCard';




  
  const Project = ({info}) => {

    const [isHovered, setIsHovered] = useState(false);

    const [searchText ,setSearchText] = useState("")

    const [filteredProjects, setFilteredProjects]=useState([])

    

// console.log(info.user.projects[0].title);

 const {projects }= info.user;

  //  setProjects(projects)

   


 



  
    
//  console.log(image);

    return (
        <>





 

<div>
      <div>
        <h1 className="text-center text-5xl font-bold py-10">Projects</h1>
        </div>

      <div  className='md:mx-100 text-lg sm:mx-40 font-bold py-10'> 
      <input type="text"
                     className ="border border-solid border-black"
                      value ={searchText}
                       onChange={(e) =>{
                        setSearchText(e.target.value);
                    }} />
                     
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg text-center " onClick={()=>{
                        //  filter
                        // const filteredRestaurant = projects.filter(
                        //     (project)=> project.techStack.join(" , ").includes(searchText)
                        // );
                        // const filteredRestaurant = projects.filter(
                        //   (project) =>
                        //     project.techStack
                        //       .join(" , ")
                        //       .toLowerCase()
                        //       .includes(searchText.toLowerCase())
                        // );

                        const filteredProjects = projects.filter((project) => {
                          const techStackMatch = project.techStack
                            .join(" , ")
                            .toLowerCase()
                            .includes(searchText.toLowerCase());
                          const nameMatch = project.title.toLowerCase().includes(searchText.toLowerCase() );
                           return techStackMatch ||  nameMatch;
                        });

                         console.log(filteredProjects);

                         setFilteredProjects(filteredProjects)

                      

                        

                    }}>Search</button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {/* {filteredRestaurant.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))} */}

{filteredProjects.length > 0 ? (
  filteredProjects
  .filter(project => project.enabled)
  .sort((a, b) => a.sequence - b.sequence)
  .map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))
) : (
  projects
  .filter(project => project.enabled)
  .sort((a, b) => a.sequence - b.sequence)
  .map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))
)}
      </div>
    </div>
        
        

</>
    )
}

  

  
  export default Project  




   