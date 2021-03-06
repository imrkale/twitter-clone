import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import {useHistory,Link} from 'react-router-dom'

function Sidebar() {
   const history=useHistory();
   const handleChange=(text)=>{
       if(text=="Home")
       {
           history.push("/");
       }
       else
       {
           history.push("/news");
       }
   }
    return (
        <div className="sideBar">
            <TwitterIcon className="sidebar__twitterIcon" />
                <a onClick={handleChange("Home")}><SidebarOption active Icon={HomeIcon} text="Home" /></a>
                <a onClick={handleChange("News")}><SidebarOption Icon={SearchIcon} text="News"/></a>
                
                <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                <SidebarOption Icon={MailOutlineIcon} text="Messages" />
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
                <SidebarOption Icon={ListAltIcon} text="Lists" />
                <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                <SidebarOption Icon={MoreHorizIcon} text="More" />

        {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
        </div>
    )
}

export default Sidebar
