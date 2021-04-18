import React, {useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import ListItem from "@material-ui/core/ListItem";
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {fetchNotifications, viewNotification} from "../../redux/actions/user/current-user";
import {getUnreadNotificationsCount, getUserNotifications} from "../../redux/selectors/user/current-user";

const NotificationsBell = ({notifications, unreadCount, fetchNotifications, viewNotification}) => {
    const ITEM_HEIGHT = 48;

    useEffect(() => {
        fetchNotifications();
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const viewAndClose = id => {
        handleClose();
        return viewNotification(id);
    };

    return (
        <div>
            <Badge
                color="secondary"
                badgeContent={unreadCount}
                invisible={unreadCount === 0}
            >
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <NotificationsNoneIcon/>
                </IconButton>
            </Badge>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5
                    }
                }}
            >
                {
                    notifications.length > 0 ?
                        notifications.map(item => {
                            return (
                                <ListItem
                                    selected={!item.viewedStatus}
                                    onClick={() => viewAndClose(item.notificationId)}
                                >
                                    {item.message}
                                </ListItem>
                            )
                        })
                        :
                        <ListItem>
                            No new notifications
                        </ListItem>
                }
            </Menu>
        </div>
    );
};

NotificationsBell.propTypes = {
    notifications: PropTypes.array.isRequired,
    unreadCount: PropTypes.number.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
    viewNotification: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    notifications: getUserNotifications(state),
    unreadCount: getUnreadNotificationsCount(state)
});

const mapDispatchToProps = dispatch => ({
    fetchNotifications: () => dispatch(fetchNotifications()),
    viewNotification: id => dispatch(viewNotification(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsBell);
