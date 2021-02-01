import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Nav from './components/navigation-bar/index';
import SignInPage from './pages/sign-in-page/sign-in-page';
import HomePage from './pages/home-page/home-page';
import MessagesPage from "./pages/messages-page/messages-page";
import MedicalReportsPage from "./pages/medical-reports-page/medical-reports-page";
import AppointmentRequestPage from "./pages/appointment-request-page/appointment-request-page";
import VideoRecordingPage from "./pages/video-recording-page/video-recording-page";
import {checkToken} from "./redux/actions/sign-in-page/sign-in-authorization";
import {getIsCheckingForToken} from "./redux/selectors/sign-in-page/sign-in-authorization";
import Spinner from "./components/spinner";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkToken();
  }

  render() {
    if (this.props.isCheckingForToken === true) {
      return <Spinner/>
    }

    const token = localStorage.getItem("idToken");
    const tokenExists = (token !== undefined && token !== null && token !== '');

    // If a token is not stored, then only return the homepage. Otherwise, return the rest of the app.
    if (!tokenExists) {
      return (
          <Router>
            <div>
              <Redirect to='/'/>
              <Route path="/" exact component={SignInPage}/>
            </div>
          </Router>
      )
    }

    return (
        <Router>
          <div>
            <Nav/>
            <Switch>
              <Route path="/" exact component={SignInPage}/>
              <Route path="/home-page" exact component={HomePage}/>
              <Route path="/messages" exact component={MessagesPage}/>
              <Route path="/medical-reports" exact component={MedicalReportsPage}/>
              <Route path="/appointment-request" exact component={AppointmentRequestPage}/>
              <Route path="/video-recording" exact component={VideoRecordingPage}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

App.propTypes = {
  checkToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isCheckingForToken: getIsCheckingForToken(state)
});

const mapDispatchToProps = dispatch => ({
  checkToken: () => dispatch(checkToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
