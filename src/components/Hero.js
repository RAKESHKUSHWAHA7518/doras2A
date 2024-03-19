const Hero = ({info}) => {
  const {
    name,title,subTitle,avatar,description


  }= info.user.about
  return (


    
  
  
  
  





<section className="hero-section" id="home">
      <div className="container ">
        <div className="flex">
           {/* <div className="hero-text wow fadeInUp flex-wrap"> */}
           <div className=" hero-text  "> 
            <span className=" font-bold text-3xl text-orange-600">Hi, I'm</span>
            <h1  className="font-bold text-6xl  text-blue-950"> {name}</h1>
            <h3> {title}</h3>
            <h4> {subTitle}</h4>
            <p>
               { description}
            </p>
            <div className="hero-btn-container">
              <a href="#contact" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="md:p-20">
  <img className="object-cover w-full md:h-16px max-h-full hover:rounded-lg   md:mx-auto sm:mx-20 my-5 p-10 justify-center items-center transform transition-all duration-300 hover:scale-105 group rounded-md hover:bg-gray-400 shadow-md bg-white border border-gray-200 hover:font-bold  " src={avatar.url} alt="dora_img" />
</div>



          
        </div>
      </div>
    </section>
  );
};
export default Hero;
