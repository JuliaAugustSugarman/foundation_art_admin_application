import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import CuratorsGallery from '../CuratorsGallery/CuratorsGallery';
import ArtPage from '../ArtPage/ArtPage';
import addArtworkForm from '../AddArtworkForm/AddArtworkForm';
import Home from '../Home/Home';
import ClientBoards from '../ClientBoards/ClientBoards';
import ClientPage from '../ClientPage/ClientPage';
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        
        <div>
          <div>
            <Nav />
            
          </div> 
          <div>
          <Header />
          </div>
          
          <UserPage />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/clientBoards"
              component={ClientBoards}
            />
            <ProtectedRoute
              exact
              path="/home"
              component={Home} 
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/curatorGallery"
              component={CuratorsGallery}
            />
            
            <ProtectedRoute
              exact
              path="/artPage"
              component={ArtPage}
            />
            <ProtectedRoute
              exact
              path="/artform"
              component={addArtworkForm}
            />
            <ProtectedRoute
              exact
              path="/clientForm"
              component={ClientPage}
            />
      

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        
          
          {/* <Footer /> */}
          
        </div>
      </Router>
  )}
}

export default connect()(App);
