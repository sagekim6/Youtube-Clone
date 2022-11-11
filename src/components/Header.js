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
          <FontAwesomeIcon icon={faYoutube} className="Youtube_logo" />
          <span className="Youtube">YouTube</span>
        </h1>
        <div className="Search">
          <input type={"text"} placeholder="검색" className="Search_input" />
          <button title="검색">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="Search_btn" />
          </button>
        </div>
        <div className="User_info">
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="Vertical_menu"
          />
          <FontAwesomeIcon icon={faCircleUser} className="User_logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
