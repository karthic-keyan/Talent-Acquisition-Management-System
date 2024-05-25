import * as React from "react";
import logo from "../assets/logo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MessageIcon from "@mui/icons-material/Message";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { SearchButton } from "./utils/searchButton";

const Header = () => {
  return (
    <div className="flex justify-between w-[100%]">
      <div className="flex gap-[20%] w-[50%]">
        <div className="flex items-center h-[100%] w-[10%] justify-center ">
          <img
            alt="logo"
            src={logo}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <SearchButton classname=" w-80" />
      </div>
      <div className="flex items-center justify-between w-[35%] ">
        <WbSunnyIcon sx={{ color: "black", height: "25px", width: "25px" }} />
        <DriveFolderUploadIcon
          sx={{ color: "black", height: "25px", width: "25px" }}
        />
        <MessageIcon sx={{ color: "black", height: "25px", width: "25px" }} />
        <CircleNotificationsIcon
          sx={{ color: "black", height: "25px", width: "25px" }}
        />
        <SettingsIcon sx={{ color: "black", height: "25px", width: "25px" }} />
        <AccountCircleIcon
          sx={{ color: "black", height: "25px", width: "25px" }}
        />
      </div>
    </div>
  );
};

export default Header;
