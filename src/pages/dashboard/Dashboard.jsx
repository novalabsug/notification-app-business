import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  Header,
  IconContainer,
  MainContent,
  SideNav,
  Content,
  Navlink,
  Card,
} from "./Dashboard.styles";

import DashboardPage from "./pages/Dashboard/Dashboard.page";
import AccountPage from "./pages/Account/Account.page";
import ApikeysPage from "./pages/Apikeys/Apikeys.page";
import SettingsPage from "./pages/Settings/Settings.page";
import UsersPage from "./pages/Users/Users.page";
import checkLoginFunc from "@/middleware/checkLogin";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState({ activeTab: "dashboard" });
  const [profile, setProfile] = useState({ clientName: "" });

  const handleTabSwitch = (e) => {
    let tab = "dashboard";

    if (e.target.getAttribute("data-target")) {
      tab = e.target.getAttribute("data-target");
      e.target.classList.add("active");
    } else {
      tab = e.target.parentElement.getAttribute("data-target");
      e.target.parentElement.classList.add("active");
    }

    switch (tab) {
      case "dashboard":
        setCurrentTab({ ...currentTab, activeTab: "dashboard" });
        handleRemovingActiveClass(tab);
        break;

      case "account":
        setCurrentTab({ ...currentTab, activeTab: "account" });
        handleRemovingActiveClass(tab);
        break;

      case "apikeys":
        setCurrentTab({ ...currentTab, activeTab: "apikeys" });
        handleRemovingActiveClass(tab);
        break;

      case "users":
        setCurrentTab({ ...currentTab, activeTab: "users" });
        handleRemovingActiveClass(tab);
        break;

      case "settings":
        setCurrentTab({ ...currentTab, activeTab: "settings" });
        handleRemovingActiveClass(tab);
        break;

      default:
        setCurrentTab({ ...currentTab, activeTab: "dashboard" });
        handleRemovingActiveClass(tab);
        break;
    }
  };

  function handleRemovingActiveClass(clickedLink) {
    const links = [...document.querySelectorAll("#tab-link-btn")];

    links.forEach((link) => {
      if (
        link.getAttribute("data-target").toString() !== clickedLink.toString()
      ) {
        link.classList.remove("active");
      }
    });
  }

  const handleFetchingProfile = () => {
    return {
      ...JSON.parse(localStorage.getItem("nmail")),
      clientName,
    };
  };

  useEffect(() => {
    if (!checkLoginFunc()) {
      location.assign("/login");
    }

    const Profile = JSON.parse(localStorage.getItem("nmail"));

    if (Profile.token) {
      setProfile({ clientName: Profile.clientName });
    }
  }, []);

  return (
    <>
      <Header>
        <a className="flx">
          <p className="f-size-lrg light-txt">Welcome,</p>
          <h3 className="f-size-lrg bold-txt primary-color t-up">
            {profile.clientName}
          </h3>
        </a>
        <SideNav>
          {/* <IconContainer>
            <li>
              <a>
                <i className="fa-solid fa-comment-alt"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fa-solid fa-bell"></i>
              </a>
            </li>
          </IconContainer> */}
        </SideNav>
      </Header>
      <MainContent>
        <div className="flx">
          <SideNav>
            <Navlink>
              <li
                onClick={handleTabSwitch}
                id="tab-link-btn"
                data-target="dashboard"
                className="flx active"
              >
                <h3 className="f-size-reg">Dashboard</h3>
              </li>
              <li
                onClick={handleTabSwitch}
                id="tab-link-btn"
                data-target="account"
                className="flx"
              >
                <h3 className="f-size-reg">Account</h3>
              </li>
              <li
                onClick={handleTabSwitch}
                id="tab-link-btn"
                data-target="apikeys"
                className="flx"
              >
                <h3 className="f-size-reg">Api Keys</h3>
              </li>
              <li
                onClick={handleTabSwitch}
                id="tab-link-btn"
                data-target="users"
                className="flx"
              >
                <h3 className="f-size-reg">Users</h3>
              </li>
              <li
                onClick={handleTabSwitch}
                id="tab-link-btn"
                data-target="settings"
                className="flx"
              >
                <h3 className="f-size-reg">Settings</h3>
              </li>
            </Navlink>
          </SideNav>
          <Content>
            <div className="p-1">
              <h3 className="t-up f-size-lrg primary-color">
                {currentTab.activeTab == "dashboard"
                  ? "Dashboard"
                  : currentTab.activeTab == "account"
                  ? "Account"
                  : currentTab.activeTab == "apikeys"
                  ? "Apikeys"
                  : currentTab.activeTab == "users"
                  ? "Users"
                  : currentTab.activeTab == "settings"
                  ? "Settings"
                  : "Dashboard"}
              </h3>
            </div>
            <div id="content">
              {currentTab.activeTab == "dashboard" ? (
                <DashboardPage />
              ) : currentTab.activeTab == "account" ? (
                <AccountPage />
              ) : currentTab.activeTab == "apikeys" ? (
                <ApikeysPage />
              ) : currentTab.activeTab == "users" ? (
                <UsersPage />
              ) : currentTab.activeTab == "settings" ? (
                <SettingsPage />
              ) : (
                <DashboardPage />
              )}
            </div>
          </Content>
        </div>
      </MainContent>
    </>
  );
};

export default Dashboard;
