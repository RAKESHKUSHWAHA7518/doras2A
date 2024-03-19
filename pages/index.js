import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Copyright from "@/src/components/Copyright";
import Experience from "@/src/components/Experience";
import Experiences from "@/src/components/Timeline";
import Feedback from "@/src/components/Feedback";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import BlogPopup from "@/src/components/popup/BlogPopup";
import ImageView from "@/src/components/popup/ImageView";
import PortfolioPopup from "@/src/components/popup/PortfolioPopup";
import VideoPopup from "@/src/components/popup/VideoPopup";
import Project from "@/src/components/Project";
import Service from "@/src/components/Service";
import Support from "@/src/components/Support";
import Works from "@/src/components/Works";
import { DoraContext } from "@/src/Context";
import Cursor from "@/src/layout/Cursor";
import PreLoader from "@/src/layout/PreLoader";
import { dora } from "@/src/utils";
import { Fragment, useContext, useEffect } from "react";
import Timeline from "@/src/components/Timeline";


export async function getStaticProps() {
  const data1 = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
 
const json = await data1.json();

   const user= json.user

  return {
     props:{
      user:json
     }
  }
}

 



const Index = ({user}) => {

 console.log(user.user);

  useEffect(() => {
    dora.imgToSvg();
    dora.customMouse();
    dora.smoothScrolling();
    dora.stickyNav();
    dora.activeSkillProgressBar();
    const a = document.querySelectorAll("a");
    for (let i = 0; i < a.length; i++) {
      const element = a[i];
      if (element.getAttribute("href") === "#") {
        element.addEventListener("click", (e) => e.preventDefault());
      }
    }
  }, []);
  const { blog, portfolio_modal } = useContext(DoraContext);
  return (
    <Fragment>
      {blog && <BlogPopup />}
      {portfolio_modal && <PortfolioPopup />}
      <ImageView />
      <VideoPopup />
      <PreLoader />
      {/* Preloader End */}
      {/* Header start */}
      <Header  />
      {/* Header End */}
      {/* Home Section Start */}
      <Hero  info={user}/>
      {/* Home Section End */}
      {/* Support Section Start */}
      <Support info={user} />
      {/* Support Section End */}
      {/* Service Section Start */}
      <Service info={user} />
      {/* Service Section End */}

        <Project info={user} /> 

        <Timeline info={user} />
      {/* Experience Section Start */}
      <Experience info={user} />
      {/* Experience Section End */}
      {/* Works Section Start */}
      <Works info={user} />
      {/* Works Section End */}
      {/* Feedback Section Start */}
      <Feedback info={user} />
      {/* Feedback Section End */}
      {/* Blog Section Start */}
      <Blog info={user} />
      {/* Blog Section End */}
      {/* Contact Section Start */}
      <Contact info={user} />
      {/* Contact Section End */}
      {/* Copyright */}
      <Copyright  info={user}/>
      {/* Cursor */}
      <Cursor />
    </Fragment>
  );
};
export default Index;
