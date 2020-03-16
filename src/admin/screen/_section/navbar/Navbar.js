import React, { useState, useEffect } from "react";
import { Button } from "../../../components/button/Button";
import $ from "jquery";
import {
  FiMenu,
  FiMessageSquare,
  FiBox,
  FiSettings,
  FiHome,
  FiUsers,
  FiPackage,
  FiLogOut,
  FiUser
} from "react-icons/fi";
import { IoMdNotificationsOutline, IoIosAnalytics } from "react-icons/io";
import "./navbar.scss";

const DATA = {
  notification: [
    {
      message: "Sonu kumar buy a product from your store, and he also donte $3",
      target: "https://www.google.com"
    },
    {
      message: "Sonu kumar buy a product from your store, and he also donte $3",
      target: "https://www.google.com"
    },
    {
      message: "Sonu kumar buy a product from your store, and he also donte $3",
      target: "https://www.google.com"
    },
    {
      message: "Sonu kumar buy a product from your store, and he also donte $3",
      target: "https://www.google.com"
    },
    {
      message: "Sonu kumar buy a product from your store, and he also donte $3",
      target: "https://www.google.com"
    },
    {
      message: "Sonu kumar buy a product from your store, and he also donte $3",
      target: "https://www.google.com"
    },
    {
      message: "Sonu kumar buy a product from your store, and he also donte $3",
      target: "https://www.google.com"
    },
    {
      message: "Sonu kumar buy a product from your store, and he also donte $3",
      target: "https://www.google.com"
    }
  ],
  message: [
    {
      profie_pic: "https://picsum.photos/200",
      name: "kamalesh biswas",
      message: [
        {
          data: "Hai my name is kamalesh",
          time: new Date()
        },
        {
          data: "Hai my name is suman",
          time: new Date()
        },
        {
          data: "Hai my name is avi",
          time: new Date()
        },
        {
          data: "Hai my name is roy",
          time: new Date()
        }
      ]
    },
    {
      profie_pic: "https://picsum.photos/200",
      name: "Ajay biswas",
      message: [
        {
          data: "Hai my name is kamalesh",
          time: new Date()
        }
      ]
    },
    {
      profie_pic: "https://picsum.photos/200",
      name: "Rahul Roy",
      message: [
        {
          data: "Hai my name is avi",
          time: new Date()
        },
        {
          data: "Hai my name is roy",
          time: new Date()
        }
      ]
    }
  ],
  profile: []
};

function TopNavbar() {
  const [data, setData] = useState({
    notice: [],
    message: [],
    profile: []
  });

  useEffect(() => {
    setData({
      notice: DATA.notification,
      message: DATA.message,
      profile: DATA.profile
    });

    if (parseInt(window.innerWidth) < 500)
      $("#left_nav").attr("value", (2).toString());
  }, []);

  const handelPopup = _id => {
    console.log("pop");
    let c = parseInt($(`#${_id}`).attr("value"));

    $("#notification_popup").hide();
    $("#message_popup").hide();
    $("#profile_popup").hide();
    // c = 2;
    if (c % 2 === 0) {
      $(`#${_id}`).show();
      $(`#${_id}`).attr("value", (++c).toString());
    } else {
      $(`#${_id}`).hide();
      $(`#${_id}`).attr("value", (++c).toString());
    }
  };

  return (
    <div className="top_nav_bar">
      <Button onClick={() => handelPopup("left_nav")}>
        <FiMenu />
      </Button>
      <div className="top_nav_action">
        <Button onClick={() => handelPopup("notification_popup")}>
          <IoMdNotificationsOutline />
          {data.notice.length !== 0 ? (
            <span
              className="count"
              style={{ position: "absolute", left: 20, top: 3 }}
            >
              {data.notice.length}
            </span>
          ) : (
            ""
          )}
        </Button>
        <Button onClick={() => handelPopup("message_popup")}>
          <FiMessageSquare />
          {data.message.length !== 0 ? (
            <span
              className="count"
              style={{ position: "absolute", right: 54, top: 3 }}
            >
              {data.message.length}
            </span>
          ) : (
            ""
          )}
        </Button>
        <Button onClick={() => handelPopup("profile_popup")}>
          <img
            className="avater"
            src={require("../../../assets/images/profile_placeholder.jpg")}
          />
          {data.profile.length !== 0 ? (
            <span
              className="count"
              style={{ position: "absolute", right: 0, top: 3 }}
            >
              {data.profiel.length}
            </span>
          ) : (
            ""
          )}
        </Button>
        {/* ******************popup**************** */}
        {/* Notification */}
        <div
          value="2"
          id="notification_popup"
          className="pop_up_card"
          style={{
            display: "none",
            width: 180,
            right: 100,
            overflowY: "scroll",
            maxHeight: 250
          }}
        >
          {data.notice.map((_each, index) => (
            <div className="item" key={index}>
              <div>
                <h6>{_each.message}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* message */}
        <div
          value="2"
          id="message_popup"
          className="pop_up_card"
          style={{
            display: "none",
            width: 250,
            right: 50,
            overflowY: "scroll",
            maxHeight: 250
          }}
        >
          {data.message.map((_message, index) => (
            <div className="item" key={index}>
              <div>
                <img className="avater" src={_message.profie_pic} />
                <h4>{_message.name}</h4>
              </div>
              <h5>{_message.message.length}</h5>
            </div>
          ))}
        </div>

        {/* profile */}
        <div
          value="2"
          id="profile_popup"
          className="pop_up_card"
          style={{ display: "none" }}
        >
          <div className="item">
            <div>
              <FiUser />
              <h4>Profile</h4>
            </div>
            <h5>{data.profile.length}</h5>
          </div>
          <div className="item">
            <div>
              <FiLogOut />
              <h4>Logout</h4>
            </div>
            {/* <h5>90</h5> */}
          </div>
        </div>
        {/* ***************************************** */}
      </div>
    </div>
  );
}

function LeftNavbar() {
  return (
    <div
      id="left_nav"
      value="1"
      className="left_nav_bar" /* style={'a' === 'a' ?{ display: 'none'} : {display: 'block'}}*/
    >
      <div className="_logo">
        <img
          src={require("../../../assets/logo/logo_web.png")}
          style={{ height: 50, width: 150, marginRight: 10 }}
        />
        {/* <h2>Stylorian</h2> */}
      </div>
      <div className="item">
        <div>
          <FiHome />
          <h4>Home</h4>
        </div>
        {/* <h5>90</h5> */}
      </div>
      <div className="item">
        <div>
          <IoIosAnalytics />
          <h4>Analytics</h4>
        </div>
        {/* <h5>90</h5> */}
      </div>
      <div className="item">
        <div>
          <FiBox />
          <h4>Products</h4>
        </div>
        <h5>90</h5>
      </div>
      <div className="item">
        <div>
          <FiPackage />
          <h4>Orders</h4>
        </div>
        <h5>5</h5>
      </div>
      <div className="item">
        <div>
          <FiUsers />
          <h4>Appearance</h4>
        </div>
        <h5>2510</h5>
      </div>
      <div className="item">
        <div>
          <FiSettings />
          <h4>Settings</h4>
        </div>
        <h5>2</h5>
      </div>
    </div>
  );
}

export { TopNavbar, LeftNavbar };
