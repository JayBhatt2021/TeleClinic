import React from 'react';
import './sidebar-user.css';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Image from "../../utils/images/blank-profile-picture.png";

const SidebarUser = () =>
{
    const initChat = (user) => {
        // setChatStarted(true)
        // setChatUser(`${user.firstName} ${user.lastName}`)
        // setUserUid(user.uid);
        //
        // console.log(user);
        //
        // dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));
    }

    return (
        <div onClick={user => initChat(user)} className="displayName">
            <div className="displayPic">
                <img src={Image} alt="" />
            </div>
            <div style={{display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px'}}>
                {/*<span style={{fontWeight: 500}}>{user.firstName} {user.lastName}</span>*/}
                {/*<span className={user.isOnline ? `onlineStatus` : `onlineStatus off`}></span>*/}
            </div>
        </div>
    );
};

SidebarUser.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarUser);
