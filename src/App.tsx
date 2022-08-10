import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
 

  return (
    <div className="App">
      <section className="left-menu">
        <ul className="left-menu__list">
          <li>
          <Link to={""}>
          <img className="svg" src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="home" width={50}/>
          </Link>
          </li>
          <li>
            <Link className="icon-text" to={""}>
              <div className="left-menu__icons">
                <span className="icons">
                  
                </span>
                <h2>Home</h2>
              </div>
            </Link>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                
              </span>
              <h2>Explore</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                
              </span>
              <h2>Notifications</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
               
              </span>
              <h2>Messages</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                
              </span>
              <h2>Bookmarks</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                
              </span>
              <h2>Lists</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                
              </span>
              <h2>Profile</h2>
            </div>
          </li>
          <li>
            <div className="left-menu__icons">
              <span className="icons">
                
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
      <section className="main-menu">
        <header className="tweet-header">
          <h2>Home</h2>
          <div className="tweet-post">
            <form className="tweet-form">
              <img
                src="https://scontent.fprn12-1.fna.fbcdn.net/v/t1.18169-9/406751_2524474545904_62094089_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=de6eea&_nc_ohc=9ZQ1v4CGMvsAX9B7_Al&_nc_ht=scontent.fprn12-1.fna&oh=00_AT-47NX_fCLLVA3HvoamJu-q0PXa_u-DZVEMJScK_t_U2A&oe=631A356E"
                width={50}
              />

              <input type="text" name="tweet" placeholder="What's happening?" />
              <button className="tweet-button">Tweet</button>
            </form>
          </div>
        </header>
      </section>
      
      <section className="right-menu">
            <form className='search-form'>
                
                <input type="text" name="searchTweets" placeholder="Search Twitter" />
            </form>
            <div className="right-menu__trends">
                <h2>Trends for you</h2>
                
            </div>
        </section>
    </div>
  );
}

export default App;
