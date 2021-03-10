import React, {useEffect} from 'react';
import './messages-page.css';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SidebarUser from "../../components/messages/sidebar-user";

const MessagesPage = () => {
    let unsubscribe;

    useEffect(() => {
        // unsubscribe = dispatch(getRealtimeUsers(auth.uid))
        //     .then(unsubscribe => {
        //         return unsubscribe;
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }, []);

    // componentWillUnmount
    useEffect(() => {
        return () => {
            // cleanup
            // unsubscribe.then(f => f()).catch(error => console.log(error));
        }
    }, []);


    const submitMessage = e => {
        // const msgObj = {
        //     user_uid_1: auth.uid,
        //     user_uid_2: userUid,
        //     message
        // }
        //
        // if(message !== "") {
        //     dispatch(updateMessage(msgObj))
        //         .then(() => {
        //             setMessage('')
        //         });
        // }
    }

    return (
        <section className="container">
            <div className="listOfUsers">
                {
                    // user.users.length > 0 ?
                    //     user.users.map(user => {
                    //         return (
                    //             <SidebarUser
                    //                 key={user.uid}
                    //                 user={user}
                    //             />
                    //         );
                    //     }) : null
                }
            </div>
            <div className="chatArea">
                <div className="chatHeader">
                    {
                        // chatStarted ? chatUser : ''
                    }
                </div>
                <div className="messageSections">
                    {
                        // chatStarted ?
                        //     user.conversations.map(con =>
                        //         <div style={{textAlign: con.user_uid_1 == auth.uid ? 'right' : 'left'}}>
                        //             <p className="messageStyle">{con.message}</p>
                        //         </div>)
                        //     : null
                    }
                </div>
                {
                    // chatStarted ?
                    //     <div className="chatControls">
                    //         <textarea
                    //             value={message}
                    //             onChange={(e) => setMessage(e.target.value)}
                    //             placeholder="Enter message here."
                    //         />
                    //         <button onClick={submitMessage}>Send</button>
                    //     </div> : null
                }
            </div>
        </section>
    );
};

MessagesPage.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
