import React from "react";
import {
  BsFillPersonCheckFill,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsArrowRightShort,
  BsJournalArrowDown,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div>
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <BsGrid1X2Fill className="icon_header" /> Dashboard
          </div>
          <span className="icon close_icon" onClick={OpenSidebar}>
            X
          </span>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="">
              <BsGrid1X2Fill className="icon" /> Dashboard{" "}
            </a>
            <BsArrowRightShort className="icon right_arrow" />
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsFillArchiveFill className="icon" /> Products
            </a>
            <BsArrowRightShort className="icon right_arrow" />
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsFillGrid3X3GapFill className="icon" /> Categories
            </a>
            <BsArrowRightShort className="icon right_arrow" />
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsPeopleFill className="icon" /> Customers
            </a>
            <BsArrowRightShort className="icon right_arrow" />
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsListCheck className="icon" /> Income
            </a>
            <BsArrowRightShort className="icon right_arrow" />
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsMenuButtonWideFill className="icon" /> Reports
            </a>
            <BsArrowRightShort className="icon right_arrow" />
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsFillGearFill className="icon" /> Settings
            </a>
            <BsArrowRightShort className="icon right_arrow" />
          </li>
        </ul>
      </div>
      <div className="admindetails">
        <div className="usericon">
          <BsFillPersonCheckFill />
        </div>
        <div>
          <h4>Evano</h4>
          <h5>Project Manager</h5>
        </div>
        <div>
          <BsJournalArrowDown className="icon" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
