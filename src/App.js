import './App.css';
import { useState } from 'react';
import IMG from "./assets/logo.png";

function App() {
  const [isLatestOpen, setIsLatestOpen] = useState(false);
  const [isWatchOpen, setIsWatchOpen] = useState(false);
  const [isMansTeamOpen, setIsMansTeamOpen] = useState(false);
  const [isWomanTeamOpen, setIsWomanTeamOpen] = useState(false);
  const [isTicketsOpen, setIsTicketsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleDropdownLatest = () => {
    setIsLatestOpen(!isLatestOpen);
    setIsWatchOpen(false);
    setIsMansTeamOpen(false);
    setIsWomanTeamOpen(false);
    setIsTicketsOpen(false);
    setIsShopOpen(false);
  };

  const toggleWatchDropdown = () => {
    setIsWatchOpen(!isWatchOpen);
    setIsLatestOpen(false);
    setIsMansTeamOpen(false);
    setIsWomanTeamOpen(false);
    setIsTicketsOpen(false);
    setIsShopOpen(false);
  };

  const toggleDropdownMansTeam = () => {
    setIsMansTeamOpen(!isMansTeamOpen);
    setIsLatestOpen(false);
    setIsWatchOpen(false);
    setIsWomanTeamOpen(false);
    setIsTicketsOpen(false);
    setIsShopOpen(false);
  };

  const toggleDropdownWomanTeam = () => {
    setIsWomanTeamOpen(!isWomanTeamOpen);
    setIsLatestOpen(false);
    setIsWatchOpen(false);
    setIsMansTeamOpen(false);
    setIsTicketsOpen(false);
    setIsShopOpen(false);
  };

  const toggleDropdownTickets = () => {
    setIsTicketsOpen(!isTicketsOpen);
    setIsLatestOpen(false);
    setIsWatchOpen(false);
    setIsMansTeamOpen(false);
    setIsWomanTeamOpen(false);
    setIsShopOpen(false);
  };

  const toggleDropdownShop = () => {
    setIsShopOpen(!isShopOpen);
    setIsLatestOpen(false);
    setIsWatchOpen(false);
    setIsMansTeamOpen(false);
    setIsWomanTeamOpen(false);
    setIsTicketsOpen(false);
  };

  return (
    <>
      <div className="App">
        <nav className="navbar">
          <ul className="menu">
            <li className="menu-item">
              <a href="#" className="menu_link">
                <img src={IMG} alt="chelsea" style={{ width: "115px" }} />
              </a>
            </li>
            <li className="menu-item" onClick={toggleDropdownLatest}>
              <a href="#" className="menu_link">latest</a>
              {isLatestOpen && (
                <ul className="dropdown-menu">
                  <li><a className="dropdown_link" href="#">news</a></li>
                  <li><a className="dropdown_link" href="#">Interviews & Features</a></li>
                  <li><a className="dropdown_link" href="#">USA tour 2024</a></li>
                  <li><a className="dropdown_link" href="#">Win LJ Signed Boots</a></li>
                </ul>
              )}
            </li>
            <li className="menu-item" onClick={toggleWatchDropdown}>
              <a href="#" className="menu_link"> Watch</a>
              {isWatchOpen && (
                <ul className="dropdown-menu">
                  <li><a className="dropdown_link" href="#">Discover</a></li>
                  <li><a className="dropdown_link" href="#">Highlights & Full Matches</a></li>
                  <li><a className="dropdown_link" href="#">Boxsets</a></li>
                </ul>
              )}
            </li>
            <li className="menu-item" onClick={toggleDropdownMansTeam}>
              <a href="#" className="menu_link"> MansTeam </a>
              {isMansTeamOpen && (
                <ul className="dropdown-menu">
                  <li><a className="dropdown_link" href="#">Fixtures & Results</a></li>
                  <li><a className="dropdown_link" href="#">Players & Staff</a></li>
                  <li><a className="dropdown_link" href="#">League Tables</a></li>
                  <li><a className="dropdown_link" href="#">News</a></li>
                </ul>
              )}
            </li>
            <li className="menu-item" onClick={toggleDropdownWomanTeam}>
              <a href="#" className="menu_link"> Woman's Team </a>
              {isWomanTeamOpen && (
                <ul className="dropdown-menu">
                  <li><a className="dropdown_link" href="#">news</a></li>
                  <li><a className="dropdown_link" href="#">Interviews & Features</a></li>
                  <li><a className="dropdown_link" href="#">USA tour 2024</a></li>
                  <li><a className="dropdown_link" href="#">Win LJ Signed Boots</a></li>
                </ul>
              )}
            </li>
            <li className="menu-item" onClick={toggleDropdownTickets}>
              <a href="#" className="menu_link"> Tickets & Hospitality </a>
              {isTicketsOpen && (
                <ul className="dropdown-menu">
                  <li><a className="dropdown_link" href="#">news</a></li>
                  <li><a className="dropdown_link" href="#">Interviews & Features</a></li>
                  <li><a className="dropdown_link" href="#">USA tour 2024</a></li>
                  <li><a className="dropdown_link" href="#">Win LJ Signed Boots</a></li>
                </ul>
              )}
            </li>
            <li className="menu-item" onClick={toggleDropdownShop}>
              <a href="#" className="menu_link"> Shop </a>
              {isShopOpen && (
                <ul className="dropdown-menu">
                  <li><a className="dropdown_link" href="#">news</a></li>
                  <li><a className="dropdown_link" href="#">Interviews & Features</a></li>
                  <li><a className="dropdown_link" href="#">USA tour 2024</a></li>
                  <li><a className="dropdown_link" href="#">Win LJ Signed Boots</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
