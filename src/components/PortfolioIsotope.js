import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { DoraContext } from "../Context";
const PortfolioIsotope = ({info}) => {

  // console.log(info.user.youtube[0].embedId);

  const {embedId} = info.user.youtube[0];

  const url =info.user.projects[0].image.url
  const url1 =info.user.projects[1].image.url
  const url2 =info.user.projects[2].image.url
  const url3 =info.user.projects[3].image.url
  const url4 =info.user.projects[4].image.url
  const url5 =info.user.projects[5].image.url




  // console.log(embedId);

   
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-row", {
        itemSelector: ".works-col",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  const { portfolio_modal_show } = useContext(DoraContext);

  return (
    <div className="work-isotope-filter">
      {/* work isotope menu */}
      <ul className="works-list-ul wow fadeInUp">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          All
        </li>
        <li
          className={`c-pointer ${activeBtn("youtube")}`}
          onClick={handleFilterKeyChange("youtube")}
          data-filter=".youtube"
        >
          Youtube
        </li>
        <li
          className={`c-pointer ${activeBtn("vimeo")}`}
          onClick={handleFilterKeyChange("vimeo")}
          data-filter=".vimeo"
        >
          Vimeo
        </li>
        <li
          className={`c-pointer ${activeBtn("soundcloud")}`}
          onClick={handleFilterKeyChange("soundcloud")}
          data-filter=".soundcloud"
        >
          Soundcloud
        </li>
        <li
          className={`c-pointer ${activeBtn("popup")}`}
          onClick={handleFilterKeyChange("popup")}
          data-filter=".popup"
        >
          Popup
        </li>
        <li
          className={`c-pointer ${activeBtn("details")}`}
          onClick={handleFilterKeyChange("details")}
          data-filter=".details"
        >
          Details
        </li>
      </ul>
      {/* work isotope items */}
      <div className="works-row wow fadeInUp">
        {/* Youtube */}
        <div className="works-col youtube">
          <a href={"//www.youtube.com/embed/"+ embedId+"?si=ehxoMK3cUFz_hfLZ"}>
            <img src={url} alt="dora_img" />
          </a>
        </div>
        {/* Vimeo */}
        <div className="works-col vimeo">
          <a href="//player.vimeo.com/video/132528823?autoplay=1">
            <img src={url1} alt="/images/works/2.png" />
          </a>
        </div>
        {/* Details */}
        <div className="works-col details">
          <a
            href="#"
            className="details-item"
            onClick={(e) => {
              e.preventDefault();
              portfolio_modal_show(true);
            }}
          >
            <img src={url2} alt="dora_img" />
          </a>
        </div>
        {/* Popup */}
        <div className="works-col popup">
          <a href={url3}>
            <img src={url3} alt="dora_img" />
          </a>
        </div>
        {/* Soundcloud */}
        <div className="works-col soundcloud">
          <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1">
            <img src={ url4} alt="dora_img" />
          </a>
        </div>
        {/* Popup */}
        <div className="works-col popup">
          <a href={url5}>
            <img src={url5} alt="dora_img" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default PortfolioIsotope;
