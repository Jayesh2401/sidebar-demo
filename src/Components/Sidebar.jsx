import React, { useState } from "react";
import { IoAnalytics } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  AiFillAlert,
  AiFillBulb,
  AiFillChrome,
  AiFillFire,
  AiFillTwitterCircle,
  AiFillGitlab,
  AiFillGoogleCircle,
  AiFillCodepenCircle,
  AiOutlineDown,
} from "react-icons/ai";

const Sidebar = ({ children }) => {
  const [isOpen, setIsopen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggle = () => setIsopen(!isOpen);
  const menuItems = [
    {
      path: "/",
      name: "dashboard",
      icon: <IoAnalytics />,
    },
    {
      path: "/about",
      name: "About",
      icon: <AiFillAlert />,
    },

    {
      path: "/comment",
      name: "Comment",
      icon: <IoAnalytics />,
    },

    {
      path: "/analytics",
      name: "Analytics",
      icon: <IoAnalytics />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <AiFillGitlab />,
      submenu: [
        {
          path: "/product/product1",
          name: "Product1",
          icon: <AiFillBulb />,
        },
        {
          path: "/product/product2",
          name: "Product2",
          icon: <AiFillChrome />,
        },
      ],
    },
    {
      path: "/productlst",
      name: "Productlst",
      icon: <AiFillGoogleCircle />,
      submenu: [
        {
          path: "/productlst/productlst1",
          name: "productlst1",
          icon: <AiFillTwitterCircle />,
        },
        {
          path: "/productlst/productlst2",
          name: "productlst2",
          icon: <AiFillCodepenCircle />,
        },
      ],
    },
  ];

  const toggleSubmenu = (itemPath) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [itemPath]: !prevState[itemPath],
    }));
  };

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={() => toggle()} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.submenu ? (
              <div>
                <div className="link" onClick={() => toggleSubmenu(item.path)}>
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                    <span style={{marginLeft:"10px" ,rotate: isOpen ? "90deg" : "180deg"}}>
                      <AiOutlineDown />
                    </span>
                  </div>
                </div>
                {submenuOpen[item.path] && (
                  <div className="mian_submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className="link submenu"
                        activeClassName="active"
                      >
                        <div className="icon">{subItem.icon}</div>
                        <div className="link_text">{subItem.name}</div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink to={item.path} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            )}
          </div>
        ))}
        {/* {menuItems.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon"> {item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          );
        })} */}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
