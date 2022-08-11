import { Link } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";
import { RiHashtag, RiFileList2Line } from "react-icons/ri";
import { CgMoreO, CgProfile } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
export function LeftMenu() {
  return (
    <section className="left-menu">
      <ul className="left-menu__list">
        <li>
          <Link to={"/home"}>
            <img
              className="svg"
              src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
              alt="home"
              width={50}
            />
          </Link>
        </li>
        <li>
          <Link className="icon-text" to={"/home"}>
            <div className="left-menu__icons">
              <span className="icons">
                <BiHomeCircle />
              </span>
              <h2>Home</h2>
            </div>
          </Link>
        </li>
        <li>
          <div className="left-menu__icons">
            <span className="icons">
              <RiHashtag />
            </span>
            <h2>Explore</h2>
          </div>
        </li>
        <li>
          <div className="left-menu__icons">
            <span className="icons">
              <IoIosNotificationsOutline />
            </span>
            <h2>Notifications</h2>
          </div>
        </li>
        <li>
          <div className="left-menu__icons">
            <span className="icons">
              <AiOutlineMail />
            </span>
            <h2>Messages</h2>
          </div>
        </li>
        <li>
          <div className="left-menu__icons">
            <span className="icons">
              <BsBookmark />
            </span>
            <h2>Bookmarks</h2>
          </div>
        </li>
        <li>
          <div className="left-menu__icons">
            <span className="icons">
              <RiFileList2Line />
            </span>
            <h2>Lists</h2>
          </div>
        </li>
        <li>
          <div className="left-menu__icons">
            <span className="icons">
              <CgProfile />
            </span>
            <h2>Profile</h2>
          </div>
        </li>
        <li>
          <div className="left-menu__icons">
            <span className="icons">
              <CgMoreO />
            </span>
            <h2>More</h2>
          </div>
        </li>
        <li>
          <div>
            <button className="btn-tweet">Tweet</button>
          </div>
        </li>
      </ul>
    </section>
  );
}
