import React from 'react';
import './sidebar-user.css';
import {connect} from "react-redux";
import Image from "../../utils/images/blank-profile-picture.png";

const SidebarUser = ({onClick, key, user}) =>
{
    return (
        <div onClick={() => onClick(user)} className="displayName">
            <div className="displayPic">
                <img src={Image} alt=""/>
            </div>
            <div style={{display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px'}}>
                <span style={{fontWeight: 500}}>{user.fullName}</span>
                <span className={user.isOnline ? `onlineStatus` : `onlineStatus off`}> </span>
            </div>
        </div>
    );
};

export default connect(null, null)(SidebarUser);
