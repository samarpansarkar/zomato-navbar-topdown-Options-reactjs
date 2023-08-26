import React from "react";
import "./Header.css";

import locationIcon from "../../../Icons/locationIcon.png";
import caretDown from "../../../Icons/caret-down.png";
import searchBar from "../../../Icons/searchIcon.png";
import downArrow from "../../../Icons/down-arrow.png";

function Header() {
  return (
    <>
      <div className="max-width header">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="zomato-logo"
          className="header-logo"
        />
        <div className="searchBarAndProfile">
          <div className="header-location-search-container">
            <div className="location-wrapper">
              <div className="location-icon-name ">
                <i>
                  <img
                    src={locationIcon}
                    alt="location-icon"
                    className="location-icon absolute-center"
                  />
                </i>
                <div className="location-icon-name">Bangalore</div>
              </div>
              <i>
                <img
                  src={caretDown}
                  alt="caret down"
                  className="caretDown-icon absolute-center"
                />
              </i>
            </div>
            <div className="location-search-separator" />
            <div className="header-search-bar">
              <img
                src={searchBar}
                alt="search bar"
                className="search-icon absolute-center"
              />
            </div>
            <input
              placeholder="Search for restaurant, cuisine or a dish                              "
              className="search-input"
            />
          </div>
          <div className="profile-wrapper">
            <i>
              <img
                src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="profile image"
                className="header-profile-image"
              />
            </i>
            <span className="header-username">Samarpan</span>
            <i>
            <img
              src={downArrow}
              alt="down arrow"
              className="header-profile-more absolute-center "
            />
          </i>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Header;
