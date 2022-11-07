import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import SideBar from "./SideBar";

const Header = () => {
  return (
    <>
      <header>
        <SideBar />
        <h1>
          <FontAwesomeIcon icon={faYoutube} className="youtube_logo" />
          <span className="title">YouTube</span>
        </h1>
        <div className="search">
          <input type={"text"} placeholder="검색" className="search_input" />
          <button title="검색">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search_btn" />
          </button>
        </div>
        <div className="user_info">
          <FontAwesomeIcon icon={faEllipsisVertical} className="ver_menu" />
          <FontAwesomeIcon icon={faCircleUser} className="user_logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
